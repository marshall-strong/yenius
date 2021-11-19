class AddHeadshotS3KeyToArtists < ActiveRecord::Migration[6.0]
  def change
    add_column :artists, :headshot_s3_key, :string
  end
end
