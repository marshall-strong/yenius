class AddCoverS3KeyToAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :cover_s3_key, :string
  end
end
