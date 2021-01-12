class Api::V1::SongsController < ApiController
  # @route GET /api/v1/songs
  def index
    @songs = Song.all
    render 'api/v1/songs/index'
  end

  # @route GET /api/v1/songs-index/:char
  def songs_index
    @upper = params[:char].upcase
    @lower = params[:char].downcase
    @songs = Song.where("name like '#{@upper}%' OR name like '#{@lower}%'")
    render 'api/v1/songs/index'
  end

  def show
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    @sample_credit_types = SampleCreditType.all
    render 'api/v1/songs/show'
  end

  # @route GET /api/v1/songs/:songId
  def song
    @song = Song.find(params[:songId])
    render 'api/v1/songs/song'
  end

  # @route GET /api/v1/songs/album/:songId
  def song_album
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/song_album'
  end

  # @route GET /api/v1/songs/annotations/:songId
  def song_annotations
    @song = Song.find(params[:songId])
    render 'api/v1/songs/song_annotations'
  end

  # @route GET /api/v1/songs/artist_credits/:songId
  def song_artist_credits
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/song_artist_credits'
  end

  # @route GET /api/v1/songs/banner/:songId
  def song_banner
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/song_banner'
  end

  # @route GET /api/v1/songs/comments/:songId
  def song_comments
    @song = Song.find(params[:songId])
    render 'api/v1/songs/song_comments'
  end

  # @route GET /api/v1/songs/description/:songId
  def song_description
    @song = Song.find(params[:songId])
    render 'api/v1/songs/song_description'
  end

  # @route GET /api/v1/songs/lyrics/:songId
  def song_lyrics
    @song = Song.find(params[:songId])
    render 'api/v1/songs/song_lyrics'
  end

  # @route GET /api/v1/songs/sample_credits/:songId
  def song_sample_credits
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    @sample_credit_types = SampleCreditType.all
    render 'api/v1/songs/song_sample_credits'
  end


  private

    # only need if creating new songs
    # def song_params
    #   params.require(:song).permit(:name)
    # end
end
