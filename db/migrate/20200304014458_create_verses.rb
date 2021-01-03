class CreateVerses < ActiveRecord::Migration[5.2]
  def change
    create_table :verses do |t|
      t.integer :song_id, null: false
      t.integer :verse_number, null: false
      t.string :body

      t.timestamps
    end
    add_index :verses, :song_id
  end
end
