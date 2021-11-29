class AddCoverToAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :cover_s3_key, :string
    add_column :albums, :cover_url, :string
  end
end
