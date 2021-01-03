class CreateSampleCredits < ActiveRecord::Migration[5.2]
  def change
    create_table :sample_credits do |t|
      t.integer :parent_song_id
      t.integer :child_song_id
      t.integer :sample_credit_type_id

      t.timestamps
    end
    add_index :sample_credits, :parent_song_id
    add_index :sample_credits, :child_song_id
    add_index :sample_credits, :sample_credit_type_id
  end
end
