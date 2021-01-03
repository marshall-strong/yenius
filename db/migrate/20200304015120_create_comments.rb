class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :commenting_user_id, null: false
      t.references :commentable, polymorphic: true, null: false
      t.string :body

      t.timestamps
    end
    add_index :comments, :commenting_user_id
  end
end
