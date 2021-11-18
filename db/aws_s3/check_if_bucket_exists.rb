require 'aws-sdk-s3'

# Checks if a bucket with a specified name exists
def bucket_exists?(s3_client, bucket_name)
  response = s3_client.list_buckets
  if response.buckets.count.zero?
    puts 'No buckets exist.'
    return false
  else
    response.buckets.each do |bucket|
      if bucket.name == bucket_name
        puts "#{bucket_name} exists!"
        return true
      end
    end
  end
  puts "#{bucket_name} does not exist..."
  return false  
rescue StandardError => e
  puts "Error checking for bucket existence: #{e.message}"
end


# Get AWS region and S3 bucket from an .env file in development (`.env.dev`) and from Heroku's Config Vars in production.
AWS_REGION = ENV['AWS_REGION']
S3_BUCKET = ENV['S3_BUCKET']

# Get AWS credentials from an .env file in development (`.env.dev`) and from Heroku's Config Vars in production.
# NOTE: using the ADMIN credentials for this test
AWS_ACCESS_KEY_ID = ENV['AWS_ADMIN_AKID']
AWS_SECRET_ACCESS_KEY = ENV['AWS_ADMIN_SECRET']

# Create a new Credentials object for the admin user
admin_credentials = Aws::Credentials.new(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)

# Set the default region and credentials in your code by updating the values in the Aws.config hash
# NOTE: this configuration will be overwritten by any region or credentials specified when constructing a client
Aws.config.update({
  region: AWS_REGION,
  credentials: admin_credentials
})

# Create an API client for S3. 
# To construct a client, you need to configure a :region and :credentials.
s3_client = Aws::S3::Client.new(
  # In this case, configuring here is redundant since we used an Aws.config hash above.
  region: AWS_REGION,
  credentials: admin_credentials
)

bucket_exists?(s3_client, S3_BUCKET) if $PROGRAM_NAME == __FILE__
