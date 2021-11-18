namespace :list do
  task :buckets => :environment do
    exec 'heroku local:run ruby db/aws_s3/list_buckets.rb --env=.env.dev --port=3002'
  end
end

desc 'List all AWS S3 buckets'
task :list_buckets => 'list:buckets'
