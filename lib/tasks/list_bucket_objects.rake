namespace :list do
  task :bucket_objects => :environment do
    exec 'heroku local:run ruby db/aws_s3/list_bucket_objects.rb --env=.env.dev --port=3002'
  end
end

desc 'List all objects in an S3 bucket'
task :list_bucket_objects => 'list:bucket_objects'
