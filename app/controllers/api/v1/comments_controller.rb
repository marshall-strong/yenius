class Api::V1::CommentsController < ApiController
  # @route GET /api/v1/albums/:album_id/comments
  def album_comments
    @album = Album.find(params[:album_id])
    @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Album", params[:album_id])
    render :album_comments
  end

  # @route POST /api/v1/albums/:album_id/comments
  def create_album_comment
    @comment = Comment.new(comment_params)
    if @comment.save
      @album = Album.find(params[:album_id])
      @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Album", params[:album_id])
      render :album_comments
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end


  # @route GET /api/v1/artists/:artist_id/comments
  def artist_comments
    @artist = Artist.find(params[:artist_id])
    @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Artist", params[:artist_id])
    render :artist_comments
  end

  # @route POST /api/v1/artists/:artist_id/comments
  def create_artist_comment
    @comment = Comment.new(comment_params)
    if @comment.save
      @artist = Artist.find(params[:artist_id])
      @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Artist", params[:artist_id])
      render :artist_comments
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end


  # @route GET /api/v1/songs/:song_id/comments
  def song_comments
    @song = Song.find(params[:song_id])
    @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Song", params[:song_id])
    render :song_comments
  end

  # @route POST /api/v1/songs/:song_id/comments
  def create_song_comment
    @comment = Comment.new(comment_params)
    if @comment.save
      @song = Song.find(params[:song_id])
      @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Song", params[:song_id])
      render :song_comments
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end


  # @route GET /api/v1/verses/:verse_id/comments
  def verse_comments
    @verse = Verse.find(params[:verse_id])
    @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Verse", params[:verse_id])
    render :verse_comments
  end

  # @route POST /api/v1/verses/:verse_id/comments
  def create_verse_comment
    @comment = Comment.new(comment_params)
    if @comment.save
      @verse = Verse.find(params[:verse_id])
      @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Verse", params[:verse_id])
      render :verse_comments
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end


  # @route PATCH /api/v1/comments/:comment_id
  # @route PUT /api/v1/comments/:comment_id
  def update
    @comment = Comment.find(params[:comment_id])
    if @comment && @comment.update_attributes(comment_params)
      render :show
    elsif !@comment
      render json: ['Could not locate comment'], status: 400
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  # @route DELETE /api/v1/comments/:id (api_v1_comment)
  def destroy
    @comment = Comment.find(params[:comment_id])
    if @comment
      @comment.destroy
      render :destroy
    else
      render ['Could not find comment']
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:id, :commenting_user_id, :commentable_type, :commentable_id, :body, :created_at)
  end
end
