# class CreateAnnotations < ActiveRecord::Migration[5.2]
#   def change
#     create_table :annotations do |t|
#       t.integer :annotating_user_id, null: false
#       t.references :annotatable, polymorphic: true, null: false
#       t.boolean :is_current, null: false, default: false
#       t.string :body

#       t.timestamps
#     end
#     add_index :annotations, :annotating_user_id
#   end
# end
