# README.md

![yenius logo](./client/src/images/logo-yenius-1482-207.png)

## Description

Yenius is a fullstack clone of the music encyclopedia [Genius](https://genius.com/).

The frontend is a React/Redux app that uses the Redux Hooks API. It was created using [cra-template-redux](https://github.com/reduxjs/cra-template-redux), the official Redux+JS template for [Create React App](https://github.com/facebook/create-react-app).
The backend is an API-only Ruby on Rails app, and uses a postgreSQL database.

Live site at [yenius.herokuapp.com](https://yenius.herokuapp.com/#/)

## Technologies / Stack

- Inspired by the Heroku blog post [A Rock Solid, Modern Web Stack](https://blog.heroku.com/a-rock-solid-modern-web-stack)

[Guide on creating an API-only Rails project](https://medium.com/@oliver.seq/creating-a-rest-api-with-rails-2a07f548e5dc)

### [Create React App](https://github.com/facebook/create-react-app)

 Because life is too short to configure Webpack manually

- Configure yenius-client server to proxy any unknown API requests to the yenius-api server.

  node foreman starts yenius-client and yenius-api from Procfile
  yenius-client: webpack-dev-server returns index.html with React app, uses react-router-dom to update Components in response to changes in frontend routes
  yenius-api: rails server returns JSON data in response to RESTful API calls (Procfile specifies the port to use)

  Users access the application via yenius-client
  Adding \"proxy\": \"http://localhost:3001/\" in package.json tells webpack-dev-server to proxy any unknown requests to yenius-api at localhost:3001.

  This setup allows the application to avoid CORS issues like \"No 'Access-Control-Allow-Origin' header is present on the requested resource.\"

  https://create-react-app.dev/docs/proxying-api-requests-in-development/

### [cra-template-redux](https://github.com/reduxjs/cra-template-redux)

- Maximize state management and minimize boilerplate with the Hooks API
- Redux store maintains single source of truth on frontend, allowing easy access to complex and interconnected song metadata

### [React Router](https://github.com/ReactTraining/react-router)

- Single page app support for lightning fast rendering on the front end

### [API-only Ruby on Rails 6](https://edgeguides.rubyonrails.org/api_app.html)

- Just the best bits, leaving React to handle the UI.

### [PostgreSQL database](https://devcenter.heroku.com/articles/heroku-postgresql)

- Single source of truth in PostgreSQL backend (join tables)
- Flexible backend allows addition of new artist credits and relationships without changes to database schema

### Production Deployment on [Heroku](https://heroku.com)

- Avoid CORS complications by managing both Node and Ruby from the same origin

### Image Hosting on [AWS S3]()

- AWS description

### [Bing News Search API](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1)

- API description

### SASS

## Features

- User Authentication, including error handling and "Demo User" login
- BCrypt gem salts, hashes, and retrieves passwords, maintaining secure user authentication from front-end to back-end
- Authenticated Users can create, update, and delete comments/annotations
- Artist Credits
- Song Interpretations
- User metrics

## Project Highlights

### Counter Cache
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

## Project Structure

Staying organized is one of the foremost challenges in creating a fullstack web application.

The file structure of this project changed multiple times over the course of development:

 1) AppAcademy structure
 2) Rails Webpacker
 3) 2 repositories: CreateReactApp frontend, Rails 6 API backend
 4) Current setup

## About Heroku, Procfiles

[Process Types and the Procfile | DEIS](https://pythonhosted.org/deis/using_deis/process-types/)
[The Procfile | Heroku Dev Center](https://devcenter.heroku.com/articles/procfile)
[The Process Model | Heroku Dev Center](https://devcenter.heroku.com/articles/process-model)

## Deployment to Heroku

- "Nothing we do is difficult, it's all just very complicated" - Scott Myers

It's a tale as old as time: everything is running smoothly in development, then you push to production and nothing works. The more our development environment resembles our production environment, the merrier you'll be when it comes time to deploy. If you're using Heroku for your production deployment, make the transition as painless as possible and use [Heroku local](https://devcenter.heroku.com/articles/heroku-local).

## credentials

In production, Heroku stores environmental variables in the config vars.
(these values have been locally exported for reference and can be found at .env.prod)

In development, Heroku local reads environmental variables from a `.env` file.

## start development server

- `rails start`

```rb
# lib/tasks/start.rake
namespace :start do
  task :development do
    exec 'heroku local -f Procfile.dev'
  end
end
desc 'Start development server'
task :start =- 'start:development'
```

`heroku` commands are executed by the Heroku Command Line Interface (CLI).
Heroku (and by extension Heroku local) uses a Procfile to specify the commands to be executed by the app on startup

```sh
# heroku local -f Procfile.dev -e .env
web: PORT=3000 yarn --cwd client start
api: PORT=3001 bundle exec rails s
```

Heroku CLI reads `Procfile.dev` and starts the tasks:

- `web: PORT=3000 yarn --cwd client start`
Runs the frontend on a local Node server on port 3000
Access the client at http://localhost:3000 in your browser

- `api: PORT=3001 bundle exec rails s`
  Runs the backend on a local Rails server on port 3001
  Access ActiveAdmin via the API, at http://localhost:3001/admin

## seed development database

- `heroku local:run rails db:seed`

## reset development database

- `heroku local:run rails db:drop && heroku local:run rails db:create && heroku local:run rails db:migrate && heroku local:run rails db:seed`

## deploy to production

- `git push heroku main`

## setup production database

- `heroku run rake db:migrate db:seed`

## reset production database

- `heroku restart && heroku pg:reset DATABASE --confirm yenius--rails6-api && heroku run rake db:migrate && heroku run rake db:seed`

## Project Style

- [pre-commit](https://pre-commit.com/)
- Prettier
- ESLint

[pre-commit](https://pre-commit.com/) is a framework for managing and maintaining multi-language pre-commit hooks
It requires [python](https://docs.python-guide.org/starting/install3/linux/) to run

UPDATE: pre-commit should now only run Prettier on the /client directory
/client directory uses Prettier and ESLint to format code as a pre-commit hook

## Future Development

- add CMS access with [ActiveAdmin](https://activeadmin.info/0-installation.html#setting-up-active-admin)

- multiple user roles:
  - moderators can edit, delete all Comments
  - admins can add, edit ArtistCreditTypes, SampleCreditTypes
  - users can add, edit Albums, Artists, Songs, Lyrics, ArtistCredits, SampleCredits

- show headshot on hover
  - mousing over an artist link should display the artist's headshot
  - the headshot should disappear when the user mouses away

## License

[MIT License](LICENSE.md)
