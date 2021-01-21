class ResetUserAuthoredCommentsCount < ActiveRecord::Migration[6.0]
  def up
    User.find_each do |user|
      User.reset_counters(user.id, :authored_comments)
    end
  end
end
