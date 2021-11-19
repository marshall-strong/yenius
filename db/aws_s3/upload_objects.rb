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

def object_uploaded?(s3_resource, bucket_name, object_key, file_path)
  object = s3_resource.bucket(bucket_name).object(object_key)
  object.upload_file(file_path)
  return true
rescue StandardError => e
  puts "Error uploading object: #{e.message}"
  return false
end

# def object_uploaded?(s3_client, bucket_name, object_key)
#   response = s3_client.put_object(
#     bucket: bucket_name,
#     key: object_key
#   )
#   if response.etag
#     return true
#   else
#     return false
#   end
# rescue StandardError => e
#   puts "Error uploading object: #{e.message}"
#   return false
# end

def upload_images(s3_resource, bucket_name)
  keys = [
    'banners/_2004-the_college_dropout.jpg',
    'banners/_2005-late_registration.jpg',
    'banners/_2007-graduation.jpg',
    'banners/_2008-808s_and_heartbreak.jpg',
    'banners/_2010-my_beautiful_dark_twisted_fantasy.jpg',
    'banners/_2011-watch_the_throne.jpg',
    'banners/_2013-yeezus.png',
    'banners/_2016-the_life_of_pablo.jpg',
    'banners/_2018-ye.png',
    'banners/_2019-jesus_is_king.jpg',
    'banners/_s_and_i.jpg',
    'covers/_2004-the_college_dropout.jpg',
    'covers/_2005-late_registration.jpg',
    'covers/_2007-graduation.jpg',
    'covers/_2008-808s_and_heartbreak.jpg',
    'covers/_2010-my_beautiful_dark_twisted_fantasy.jpg',
    'covers/_2011-watch_the_throne.jpg',
    'covers/_2013-yeezus.jpg',
    'covers/_2016-the_life_of_pablo.jpg',
    'covers/_2018-ye.jpg',
    'covers/_2019-jesus_is_king.jpg',
    'covers/_this_is_fine.png',
    'headshots/_adam_levine.jpg',
    'headshots/_al_be_back.jpg',
    'headshots/_ant_clemons.jpg',
    'headshots/_beyonce.jpg',
    'headshots/_big_sean.jpg',
    'headshots/_bon_iver.jpg',
    'headshots/_brandy.jpg',
    'headshots/_camron.jpg',
    'headshots/_chance_the_rapper.jpg',
    'headshots/_charlie_wilson.jpg',
    'headshots/_chris_brown.png',
    'headshots/_chris_martin.jpg',
    'headshots/_clipse.jpg',
    'headshots/_common.jpg',
    'headshots/_consequence.png',
    'headshots/_curtis_mayfield.jpg',
    'headshots/_cyhi_the_prince.jpg',
    'headshots/_desiigner.jpg',
    'headshots/_dj_premier.jpg',
    'headshots/_dwele.jpg',
    'headshots/_evidence.jpg',
    'headshots/_frank_ocean.jpg',
    'headshots/_fred_hammond.jpg',
    'headshots/_freeway.jpg',
    'headshots/_gil_scott_heron.jpg',
    'headshots/_glc.jpg',
    'headshots/_god.jpg',
    'headshots/_j_ivy.jpg',
    'headshots/_jaime_foxx.jpg',
    'headshots/_jay_z.jpg',
    'headshots/_jeezy.jpg',
    'headshots/_john_legend.jpg',
    'headshots/_john_mayer.jpg',
    'headshots/_kanye_west.jpg',
    'headshots/_kelly_price.jpg',
    'headshots/_kendrick_lamar.jpg',
    'headshots/_kenny_g.jpg',
    'headshots/_kid_cudi.jpg',
    'headshots/_kirk_franklin.jpg',
    'headshots/_lil_wayne.jpg',
    'headshots/_ludacris.jpg',
    'headshots/_lupe_fiasco.jpg',
    'headshots/_marvin_gaye.png',
    'headshots/_max_b.jpg',
    'headshots/_mr_hudson.png',
    'headshots/_nas.jpg',
    'headshots/_nicki_minaj.jpg',
    'headshots/_otis_redding.png',
    'headshots/_partynextdoor.jpg',
    'headshots/_patti_labelle.jpg',
    'headshots/_paul_wall.jpg',
    'headshots/_post_malone.jpg',
    'headshots/_pusha_t.jpg',
    'headshots/_q_tip.jpg',
    'headshots/_raekwon.jpg',
    'headshots/_really_doe.jpg',
    'headshots/_rhymefest.jpg',
    'headshots/_rick_ross.jpg',
    'headshots/_rihanna.jpg',
    'headshots/_rza.jpg',
    'headshots/_sampha.jpg',
    'headshots/_sia.jpg',
    'headshots/_sunday_service_choir.jpg',
    'headshots/_swizz_beatz.jpg',
    'headshots/_syleena_johnson.jpg',
    'headshots/_t_pain.jpg',
    'headshots/_talib_kweli.png',
    'headshots/_the_boys_choir_of_harlem.png',
    'headshots/_the_dream.png',
    'headshots/_the_game.png',
    'headshots/_the_weeknd.jpg',
    'headshots/_this_is_fine.png',
    'headshots/_twista.jpg',
    'headshots/_ty_dolla_sign.jpg',
    'headshots/_vic_mensa.jpg',
    'headshots/_wolfgang_amadeus_mozart.jpg',
    'headshots/_yasiin_bey.jpg',
    'headshots/_young_thug.jpg',
  ]
  keys.each do |object_key|
    file_path = './db/aws_s3/images/' + object_key
    if object_uploaded?(s3_resource, bucket_name, object_key, file_path)
      puts "Object '#{object_key}' uploaded to bucket '#{bucket_name}'."
    else
      puts "Object '#{object_key}' not uploaded to bucket '#{bucket_name}'."
    end
  end
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

# Create an S3 Resource (not sure how this is different from a client...)
# To construct a resource, you need to pass a :client.
s3_resource = Aws::S3::Resource.new(client: s3_client)

if $PROGRAM_NAME == __FILE__
  if bucket_exists?(s3_client, S3_BUCKET)
    upload_images(s3_resource, S3_BUCKET)
  end
end
