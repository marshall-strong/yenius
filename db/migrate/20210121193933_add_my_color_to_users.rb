class AddMyColorToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :my_color, :string
  end
end
