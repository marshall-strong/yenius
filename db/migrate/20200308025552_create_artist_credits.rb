class CreateArtistCredits < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_credits do |t|
      t.integer :artist_id
      t.references :creditable, polymorphic: true
      t.integer :artist_credit_type_id

      t.timestamps
    end
    add_index :artist_credits, :artist_id
    add_index :artist_credits, :artist_credit_type_id
  end
end
