namespace :delete do
  task :bucket_objects => :environment do
    exec 'heroku local:run ruby db/aws_s3/delete_bucket_objects.rb --env=.env.dev --port=3002'
  end
end

desc 'Delete all objects in an S3 bucket'
task :delete_bucket_objects => 'delete:bucket_objects'
