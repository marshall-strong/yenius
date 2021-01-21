class AddAuthoredCommentsCountToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :authored_comments_count, :integer
  end
end
