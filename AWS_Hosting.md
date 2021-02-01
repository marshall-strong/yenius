# AWS Hosting

## Resoures

- [AWS Management Console](https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2#)
- [AWS: Installing the AWS SDK for Ruby](https://docs.aws.amazon.com/sdk-for-ruby/v3/developer-guide/setup-install.html)
- [AWS: Configuring the AWS SDK for Ruby](https://docs.aws.amazon.com/sdk-for-ruby/v3/developer-guide/setup-config.html)
- [Heroku: Using AWS S3 to Store Static Assets and File Uploads](https://devcenter.heroku.com/articles/s3)
- [Heroku: Directo to S3 Image Uploads in Rails](https://devcenter.heroku.com/articles/direct-to-s3-image-uploads-in-rails)
- [Possible improvement?](https://www.mmbyte.com/article/40111.html)

## S3 Development Bucket

> ### bucket_name
> > `yenius--rails6-api--s3-bucket-dev`
>
> ### region
> > `us-east-2`
>
> ### access
> > *Objects can be public*
>
> ### bucket_policy
> > ```json
> > {
> >   "Version": "2012-10-17",
> >   "Id": "DevBucketAdminPolicy",
> >   "Statement": [
> >     {
> >       "Sid": "DevAdminStatement",
> >       "Effect": "Allow",
> >       "Principal": {
> >         "AWS": "arn:aws:iam::157703510654:user/yenius--rails6-api--s3-admin-user"
> >       },
> >       "Action": "s3:*",
> >       "Resource": [
> >         "arn:aws:s3:::yenius--rails6-api--s3-bucket-dev/*",
> >         "arn:aws:s3:::yenius--rails6-api--s3-bucket-dev"
> >        ]
> >      }
> >    ]
> > }
> > ```
>
> ### bucket_CORS
> > ```json
> > [
> >     {
> >         "AllowedHeaders": [
> >             "Authorization"
> >         ],
> >         "AllowedMethods": [
> >             "GET",
> >             "POST",
> >             "PUT"
> >         ],
> >         "AllowedOrigins": [
> >             "*"
> >         ],
> >         "ExposeHeaders": [],
> >         "MaxAgeSeconds": 3000
> >     }
> > ]
> > ```


## S3 Production Bucket

> ### bucket_name
> > `yenius--rails6-api--s3-bucket-prod`
>
> ### region
> > `us-east-2`
>
> ### access
> > *Objects can be public*
>
> ### bucket_policy
> > ```json
> > {
> >   "Version": "2012-10-17",
> >   "Id": "ProdBucketAdminPolicy",
> >   "Statement": [
> >     {
> >       "Sid": "ProdAdminStatement",
> >       "Effect": "Allow",
> >       "Principal": {
> >         "AWS": "arn:aws:iam::157703510654:user/yenius--rails6-api--s3-admin-user"
> >       },
> >       "Action": "s3:*",
> >       "Resource": [
> >         "arn:aws:s3:::yenius--rails6-api--s3-bucket-prod/*",
> >         "arn:aws:s3:::yenius--rails6-api--s3-bucket-prod"
> >        ]
> >      }
> >    ]
> > }
> > ```
>
> ### bucket_CORS
> > ```json
> > [
> >     {
> >         "AllowedHeaders": [
> >             "Authorization"
> >         ],
> >         "AllowedMethods": [
> >             "GET",
> >             "POST",
> >             "PUT"
> >         ],
> >         "AllowedOrigins": [
> >             "*"
> >         ],
> >         "ExposeHeaders": [],
> >         "MaxAgeSeconds": 3000
> >     }
> > ]
> > ```

## IAM

> ### IAM User Name
> > `yenius--rails6-api--s3-admin-user`
>
> ### IAM Group Name
> > `yenius--rails6-api--s3-admin-group`
>
> ### IAM Policy Name
> > `yenius--rails6-api--s3-admin-group-policy`
> > > the managed policy is attached to the group, and the user is a member of the group
>
> ### IAM Policy
> > ```json
> > {
> >   "Version": "2012-10-17",
> >   "Statement": [
> >     {
> >       "Sid": "YeniusRails6ApiS3AdminGroupPolicy",
> >       "Effect": "Allow",
> >       "Action": "s3:*",
> >       "Resource": [
> >         "arn:aws:s3:::yenius--rails6-api--s3-bucket-dev",
> >         "arn:aws:s3:::yenius--rails6-api--s3-bucket-dev/*",
> >         "arn:aws:s3:::yenius--rails6-api--s3-bucket-prod",
> >         "arn:aws:s3:::yenius--rails6-api--s3-bucket-prod/*"
> >       ]
> >     }
> >   ]
> > }
> > ```
