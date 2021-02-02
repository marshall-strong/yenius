![](./client/src/images/logo-yenius-1482-207.png)

Yenius v2 has separate subdirectories for the frontend and backend.
The frontend is a React/Redux app that uses the Redux Hooks API. It was created using [cra-template-redux](https://github.com/reduxjs/cra-template-redux), the official Redux+JS template for [Create React App](https://github.com/facebook/create-react-app).
The backend is an API-only Ruby on Rails app, and uses a postgreSQL database.

# Description
Yenius is a Kanye-centric fullstack clone of the music encyclopedia [Genius](https://genius.com/).
Live site at [yenius.herokuapp.com](https://yenius.herokuapp.com/#/)

# Built with a Rock Solid, Modern Web Stack

> Inspired by the Heroku blog post [A Rock Solid, Modern Web Stack](https://blog.heroku.com/a-rock-solid-modern-web-stack)

## [Create React App](https://github.com/facebook/create-react-app)
> Because life is too short to configure Webpack manually

## [cra-template-redux](https://github.com/reduxjs/cra-template-redux)
> Maximize state management and minimize boilerplate with the Hooks API

## [React Router](https://github.com/ReactTraining/react-router)
> Single page app support for lightning fast rendering on the front end

## [API-only Ruby on Rails 6](https://edgeguides.rubyonrails.org/api_app.html)
> Just the best bits, leaving React to handle the UI.

## [PostgreSQL database](https://devcenter.heroku.com/articles/heroku-postgresql)
> The classic

## Production Deployment on [Heroku](https://heroku.com)
> Avoid CORS complications by managing both Node and Ruby from the same origin

## Image Hosting on [AWS S3]()
> AWS description

## [Bing News Search API]()
> API description

# Features

* User Authentication, including error handling and "Demo User" login
* Authenticated Users can create, update, and delete comments/annotations
* Artist Credits
* Song Interpretations
* User metrics



# Project Highlights

Project Highlight number one, followed by Code Snippet number one

```js
  const code = (snippet) => `#1`;
```

Project Highlight number two, followed by Code Snippet number two

```js
  const code = (snippet) => `#2`;
```

Project Highlight number three, followed by Code Snippet number three

```js
  const code = (snippet) => `#3`;
```

# To Do
 - add CMS with [ActiveAdmin](https://activeadmin.info/0-installation.html#setting-up-active-admin)

# Development Environment
[pre-commit](https://pre-commit.com/)

seed development database:
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




Since this app will ultimately be deployed to Heroku, we should use [Heroku local](https://devcenter.heroku.com/articles/heroku-local) for development so that our dev environment more closely resembles our production environment.

# credentials
DEV: Heroku local reads environmental variables from .env
PROD: Heroku stores environmental variables in the config vars. For reference, these values have been locally exported to .env.prod

# seeding database
DEV: `heroku local:run rails db:seed`
PROD: `heroku run rake db:migrate db:seed`

# resetting database
DEV: `heroku local:run rails db:drop && heroku local:run rails db:create && heroku local:run rails db:migrate && heroku local:run rails db:seed`
PROD: `heroku restart && heroku pg:reset DATABASE --confirm yenius--rails6-api && heroku run rake db:migrate && heroku run rake db:seed`
https://devcenter.heroku.com/articles/heroku-postgresql

# deploying
DEV: `heroku local -f Procfile.dev -e .env`
PROD: `git push heroku main`, `heroku run rake db:migrate`, `heroku run rails db:seed`


# Counter Cache
The Rails API uses a counter cache to store each User's authored comments.
https://blog.appsignal.com/2018/06/19/activerecords-counter-cache.html
The counter_cache: option is specified on the belongs_to side of the association (Comment), and the symbol passed (:authored_comments_count) is the name of the field that will be added to the has_many model (User).
`belongs_to :author, class_name: :User, foreign_key: :commenting_user_id, counter_cache: :authored_comments_count`
Generate migration to add a column to the Users table
`rails g migration AddAuthoredCommentsCountToUsers authored_comments_count:integer`
Generate migration to update the existing records (avoids having to re-seed the database)
`rails g migration ResetUserAuthoredCommentsCount --force`
Run migrations (development)
`heroku local:run rails db:migrate`

