class AddBannerToAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :banner_s3_key, :string
    add_column :albums, :banner_url, :string
  end
end
