json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.authorId comment.commenting_user_id
      json.commentableType comment.commentable_type
      json.commentableId comment.commentable_id
      json.body comment.body
      json.createdAt comment.created_at
      json.updatedAt comment.updated_at
    end
  end
end

json.users do
  @comments.each do |comment|
    json.set! comment.author.id do
      json.id comment.author.id
      json.username comment.author.username
      json.myColor comment.author.my_color
    end
  end
end

json.verses do
  json.set! @verse.id do
    json.id @verse.id
    json.comments do
      json.array! @comments.map { |comment| comment.id }
    end
  end
end
