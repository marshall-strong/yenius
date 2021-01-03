json.comments do
  json.set! @comment.id do
    json.extract! @comment, :id
    json.body @comment.body
    json.authorId @comment.commenting_user_id
    json.commentableType @comment.commentable_type
    json.commentableId @comment.commentable_id
    json.createdAt @comment.created_at
    json.updatedAt @comment.updated_at
  end
end
