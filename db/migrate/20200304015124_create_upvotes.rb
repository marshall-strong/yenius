class CreateUpvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :upvotes do |t|
      t.integer :upvoting_user_id, null: false
      t.references :upvotable, polymorphic: true, null: false
      t.boolean :is_downvote, null: false, default: false

      t.timestamps
    end
    add_index :upvotes, :upvoting_user_id
  end
end
