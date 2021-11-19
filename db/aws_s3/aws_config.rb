# AWS is currently configured in every file -- the code below is repeated in each of them (should be refactored)
# This file is not currently read by anything. 

require 'aws-sdk-s3'

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

# Create an S3 Resource (not sure how this is different from a client...)
# To construct a resource, you need to pass a :client.
s3_resource = Aws::S3::Resource.new(client: s3_client)

### END AWS CONFIGURATION ###
