class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name, null: false
      t.date :release_date
      t.string :bio

      t.timestamps
    end
    add_index :albums, :name, unique: true
  end
end
