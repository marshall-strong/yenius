class Api::V2::CommentsController < ApplicationController

  # @route GET /api/v2/albums/:albumId/comments
  # @route GET /api/v2/artists/:artistId/comments
  # @route GET /api/v2/songs/:songId/comments
  # @route GET /api/v2/verses/:verseId/comments
  def index
    @comments = Comment.all
    render :index
  end

  # @route POST /api/v2/comments (api_v2_comments)
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end
  
  # @route PATCH /api/v2/comments/:commentId
  def update
    @comment = selected_comment
    if @comment && @comment.update_attributes(comment_params)
      render :show
    elsif !@comment
      render json: ['Could not locate comment'], status: 400
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  # @route DELETE /api/v2/comments/:commentId
  def destroy
    @comment = selected_comment
    if @comment
      @comment.destroy
      render :show
    else
      render ['Could not find comment']
    end
  end
  
  private
  
  def selected_comment
    Comment.find(params[:id])
  end
  
  def comment_params
    params.require(:comment).permit(:id, :commenting_user_id, :commentable_type, :commentable_id, :body)
  end
end
