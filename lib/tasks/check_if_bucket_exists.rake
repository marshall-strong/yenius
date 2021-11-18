namespace :check_for do
  task :bucket => :environment do
    exec 'heroku local:run ruby db/aws_s3/check_if_bucket_exists.rb --env=.env.dev --port=3002'
  end
end

desc 'Checks if an S3 bucket with the specified name exists'
task :check_if_bucket_exists => 'check_for:bucket'
