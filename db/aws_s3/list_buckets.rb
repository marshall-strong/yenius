require 'aws-sdk-s3'

# Lists the names of all AWS S3 buckets
def list_buckets(s3_client, max_buckets = 50)
  if max_buckets < 1 || max_buckets > 50
    puts 'Maximum number of buckets to request must be between 1 and 50.'
    return
  end
  buckets = s3_client.list_buckets.buckets
  if buckets.count.zero?
    puts 'No buckets.'
    return
  else
    if buckets.count > max_buckets
      puts "First #{max_buckets} buckets:"
      i = 0
      max_buckets.times do
        puts "#{i + 1}) #{buckets[i].name}"
        i += 1
      end
    else
      puts "#{buckets.count} buckets:"
      i = 0
      buckets.count.times do
        puts "#{i + 1}) #{buckets[i].name}"
        i += 1
      end
    end
  end
rescue StandardError => e
  puts "Error listing buckets: #{e.message}"
end


# Get AWS region from an .env file in development (`.env.dev`) and from Heroku's Config Vars in production.
AWS_REGION = ENV['AWS_REGION']

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

list_buckets(s3_client, 25) if $PROGRAM_NAME == __FILE__
