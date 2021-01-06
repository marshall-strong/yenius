# yenius--rails-api--create-react-app

Guide for deployment:
_[A Rock Solid, Modern Web Stack—Rails 5 API + ActiveAdmin + Create React App on Heroku](https://blog.heroku.com/a-rock-solid-modern-web-stack)_

_[ActiveAdmin](https://activeadmin.info/0-installation.html#setting-up-active-admin)_

## Development environment

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
