json.users do
  json.set! @user.id do
    json.id @user.id
    json.username @user.username
    json.myColor @user.my_color
    json.authoredCommentsCount @user.authored_comments_count
  end
end
