namespace :start do
  task :development do
    exec 'heroku local -f Procfile.dev -e .env.dev'
  end
end

desc 'Start development server'
task :start => 'start:development'
