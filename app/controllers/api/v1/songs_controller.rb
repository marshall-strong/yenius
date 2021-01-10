class Api::V1::SongsController < ApiController
  # @route GET /api/v1/songs (api_v1_songs)
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

  # @route GET /api/v1/songs/:id (api_v1_song)
  def show
    @song = Song.find(params[:id])
    @artist_credit_types = ArtistCreditType.all
    @sample_credit_types = SampleCreditType.all
    render 'api/v1/songs/show'
  end

  # @route GET /api/v1/songs/:songId/album
  def show_song_album
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/song_album'
  end

  # @route GET /api/v1/songs/:songId/annotations
  def show_song_annotations
    @song = Song.find(params[:songId])
    render 'api/v1/songs/song_annotations'
  end

  # @route GET /api/v1/songs/:songId/artist_credits
  def show_song_artist_credits
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/song_artist_credits'
  end

  # @route GET /api/v1/songs/:songId/banner
  def show_song_banner
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/song_banner'
  end

  # @route GET /api/v1/songs/:songId/comments
  def show_song_comments
    @song = Song.find(params[:songId])
    render 'api/v1/songs/song_comments'
  end

  # @route GET /api/v1/songs/:songId/description
  def show_song_description
    @song = Song.find(params[:songId])
    render 'api/v1/songs/song_description'
  end

  # @route GET /api/v1/songs/:songId/lyrics
  def show_song_lyrics
    @song = Song.find(params[:songId])
    render 'api/v1/songs/song_lyrics'
  end

  # @route GET /api/v1/songs/:songId/sample_credits
  def show_song_sample_credits
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
