class AddBannerS3KeyToAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :banner_s3_key, :string
  end
end
