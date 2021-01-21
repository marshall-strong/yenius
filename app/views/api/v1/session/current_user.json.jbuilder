json.session do
  json.set! 'currentUser' do
    json.extract! @user, :id, :username, :email
    json.myColor @user.my_color
  end
  json.currentUserId @user.id
end
