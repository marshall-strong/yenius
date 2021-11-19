namespace :upload do
  task :objects => :environment do
    exec 'heroku local:run ruby db/aws_s3/upload_objects.rb --env=.env.dev --port=3002'
  end
end

desc 'Upload objects to an S3 bucket'
task :upload_objects => 'upload:objects'
