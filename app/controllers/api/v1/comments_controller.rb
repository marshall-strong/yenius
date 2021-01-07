class Api::V1::CommentsController < ApiController
  # @route GET /api/v1/albums/:commentableId/comments
  def album_comments
    @album = Album.find(params[:commentableId])
    @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Album", params[:commentableId])
    render :album_comments
  end

  # @route GET /api/v1/artists/:commentableId/comments
  def artist_comments
    @artist = Artist.find(params[:commentableId])
    @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Artist", params[:commentableId])
    render :artist_comments
  end

  # @route GET /api/v1/songs/:commentableId/comments
  def song_comments
    @song = Song.find(params[:commentableId])
    @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Song", params[:commentableId])
    render :song_comments
  end

  # @route GET /api/v1/verses/:commentableId/comments
  def verse_comments
    @verse = Verse.find(params[:commentableId])
    @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Verse", params[:commentableId])
    render :verse_comments
  end


  # @route POST /api/v1/albums/:commentableId/comments
  def create_album_comment
    @comment = Comment.new(comment_params)
    if @comment.save
      @album = Album.find(params[:commentableId])
      @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Album", params[:commentableId])
      render :album_comments
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  # @route POST /api/v1/artists/:commentableId/comments
  def create_artist_comment
    @comment = Comment.new(comment_params)
    if @comment.save
      @artist = Artist.find(params[:commentableId])
      @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Artist", params[:commentableId])
      render :artist_comments
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  # @route POST /api/v1/songs/:commentableId/comments
  def create_song_comment
    @comment = Comment.new(comment_params)
    if @comment.save
      @song = Song.find(params[:commentableId])
      @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Song", params[:commentableId])
      render :song_comments
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  # @route POST /api/v1/verses/:commentableId/comments
  def create_verse_comment
    @comment = Comment.new(comment_params)
    if @comment.save
      @verse = Verse.find(params[:commentableId])
      @comments = Comment.where("commentable_type = ? AND commentable_id = ?", "Verse", params[:commentableId])
      render :verse_comments
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end


  # @route POST /api/v1/comments (api_v1_comments)
  def create
    @commentable_type = params[:commentable_type]
    if @commentable_type === "Album"
      @commentable = Album.find(params[:commentable_id])
    elsif @commentable_type === "Artist"
      @commentable = Artist.find(params[:commentable_id])
    elsif @commentable_type === "Song"
      @commentable = Song.find(params[:commentable_id])
    elsif @commentable_type === "Verse"
      @commentable = Verse.find(params[:commentable_id])
    end
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  # @route PATCH /api/v1/comments/:id (api_v1_comment)
  # @route PUT /api/v1/comments/:id (api_v1_comment)
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

  # @route GET /api/v1/comments/:id (api_v1_comment)
  def show
    @comment = selected_comment
  end

  # @route GET /api/v1/comments (api_v1_comments)
  def index
    @comments = Comment.all
  end

  # @route DELETE /api/v1/comments/:id (api_v1_comment)
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
