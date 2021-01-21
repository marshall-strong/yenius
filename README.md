# yenius--rails-api--create-react-app

Production: https://yenius--rails6-api.herokuapp.com/

Guide for deployment:
_[A Rock Solid, Modern Web Stack—Rails 5 API + ActiveAdmin + Create React App on Heroku](https://blog.heroku.com/a-rock-solid-modern-web-stack)_
https://devcenter.heroku.com/articles/heroku-postgresql

_[ActiveAdmin](https://activeadmin.info/0-installation.html#setting-up-active-admin)_

## Development environment
seed development:
`heroku local:run rails db:seed`

run:
`rails start`

The `rails start` command is configured in `lib/tasks/start.rake`.
`heroku` commands are executed by the Heroku Command Line Interface (CLI).
heroku reads `Procfile.dev` and starts the tasks:

- `web: PORT=3000 yarn --cwd client start`
  Runs the frontend on a local Node server on port 3000
  Access the client at http://localhost:3000 in your browser
- `api: PORT=3001 bundle exec rails s`
  Run the backend on a local Rails server on port 3001
  Access ActiveAdmin via the API, at http://localhost:3001/admin

## Style

Use _[pre-commit](https://pre-commit.com/)_ framework for managing and maintaining multi-language pre-commit hooks (Requires _[python](https://docs.python-guide.org/starting/install3/linux/)_)
UPDATE: pre-commit should now only run Prettier the /client directory
/client directory uses Prettier and ESLint to format code as a pre-commit hook

## AWS S3 configuration
[AWS Management Console](https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2#)
_[AWS: Installing the AWS SDK for Ruby](https://docs.aws.amazon.com/sdk-for-ruby/v3/developer-guide/setup-install.html)_
_[AWS: Configuring the AWS SDK for Ruby](https://docs.aws.amazon.com/sdk-for-ruby/v3/developer-guide/setup-config.html)_
_[Heroku: Using AWS S3 to Store Static Assets and File Uploads](https://devcenter.heroku.com/articles/s3)_
_[Heroku: Directo to S3 Image Uploads in Rails](https://devcenter.heroku.com/articles/direct-to-s3-image-uploads-in-rails)_
Possible improvement? (https://www.mmbyte.com/article/40111.html)
DEV.bucket_name: yenius--rails6-api--s3-bucket-dev
DEV.region: us-east-2
DEV.access: Objects can be public
DEV.bucket_policy: {
    "Version": "2012-10-17",
    "Id": "DevBucketAdminPolicy",
    "Statement": [
        {
            "Sid": "DevAdminStatement",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::157703510654:user/yenius--rails6-api--s3-admin-user"
            },
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::yenius--rails6-api--s3-bucket-dev/*",
                "arn:aws:s3:::yenius--rails6-api--s3-bucket-dev"
            ]
        }
    ]
}
DEV.bucket_CORS:[
    {
        "AllowedHeaders": [
            "Authorization"
        ],
        "AllowedMethods": [
            "GET",
            "POST",
            "PUT"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [],
        "MaxAgeSeconds": 3000
    }
]

PROD.bucket_name: yenius--rails6-api--s3-bucket-prod
PROD.region: us-east-2
PROD.access: Bucket and objects not public
PROD.bucket_policy: {
    "Version": "2012-10-17",
    "Id": "ProdBucketAdminPolicy",
    "Statement": [
        {
            "Sid": "ProdAdminStatement",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::157703510654:user/yenius--rails6-api--s3-admin-user"
            },
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::yenius--rails6-api--s3-bucket-prod/*",
                "arn:aws:s3:::yenius--rails6-api--s3-bucket-prod"
            ]
        }
    ]
}
PROD.bucket_CORS:[
    {
        "AllowedHeaders": [
            "Authorization"
        ],
        "AllowedMethods": [
            "GET",
            "POST",
            "PUT"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [],
        "MaxAgeSeconds": 3000
    }
]


IAM User Name: yenius--rails6-api--s3-admin-user
IAM Group Name: yenius--rails6-api--s3-admin-group
IAM Policy Name: yenius--rails6-api--s3-admin-group-policy
(the managed policy is attached to the group, and the user is a member of the group)
IAM Policy:
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "YeniusRails6ApiS3AdminGroupPolicy",
      "Effect": "Allow",
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::yenius--rails6-api--s3-bucket-dev",
        "arn:aws:s3:::yenius--rails6-api--s3-bucket-dev/*",
        "arn:aws:s3:::yenius--rails6-api--s3-bucket-prod",
        "arn:aws:s3:::yenius--rails6-api--s3-bucket-prod/*"
      ]
    }
  ]
}



Since this app will ultimately be deployed to Heroku, we should use [Heroku local](https://devcenter.heroku.com/articles/heroku-local) for development so that our dev environment more closely resembles our production environment.

# credentials
PROD: Heroku stores environmental variables in the config vars. For reference, these values have been locally exported to .env.prod
DEV: Heroku local reads environmental variables from .env

# seed database
PROD: `heroku run rake db:migrate db:seed`
DEV: `heroku local:run rails db:seed`

# deploying
PROD: `git push heroku main`, `heroku run rake db:migrate`, `heroku run rails db:seed`
DEV: `heroku local -f Procfile.dev -e .env`


# Counter Cache
https://blog.appsignal.com/2018/06/19/activerecords-counter-cache.html
using a counter cache in the Rails API to count each User's authored comments
`rails g migration AddAuthoredCommentsCountToUsers authored_comments_count:integer`