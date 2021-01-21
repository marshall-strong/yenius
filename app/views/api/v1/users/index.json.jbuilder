json.users do
  @users.each do |user|
    json.set! user.id do
      json.id user.id
      json.username user.username
      json.authoredCommentsCount user.authored_comments_count
    end
  end
end
