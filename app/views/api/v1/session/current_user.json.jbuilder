json.session do
  json.set! 'currentUser' do
    json.extract! @user, :id, :username, :email
  end
  json.currentUserId @user.id
end

json.users do
  json.set! @user.id do
    json.extract! @user, :id, :username, :email
  end
end