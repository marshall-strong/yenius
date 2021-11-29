class AddHeadshotToArtists < ActiveRecord::Migration[6.0]
  def change
    add_column :artists, :headshot_s3_key, :string
    add_column :artists, :headshot_url, :string
  end
end
