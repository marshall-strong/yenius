class AddTopAlbumNumberToAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :top_album_number, :integer, :default => nil
  end
end
