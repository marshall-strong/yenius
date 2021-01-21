json.users do
  json.set! @user.id do
    json.extract! @user, :id, :username, :email
    json.authoredCommentsCount @user.authored_comments_count
  end
end
