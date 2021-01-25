class Api::V1::SongsController < ApiController
  # @route GET /api/v1/songs/top_songs
  def top_songs
    @songs = Song.where("rank IS NOT NULL")
    render 'api/v1/songs/top_songs'
  end

  # @route GET /api/v1/songs/index/:char
  def index
    @upper = params[:char].upcase
    @lower = params[:char].downcase
    @songs = Song.where("name like '#{@upper}%' OR name like '#{@lower}%'")
    render 'api/v1/songs/index'
  end

  # @route GET /api/v1/songs/:song_id
  def show
    @song = Song.find(params[:song_id])
    render 'api/v1/songs/show'
  end

  # @route GET /api/v1/songs/:song_id/verses/:verseId
  def verse
    @verse = Verse.find(params[:verseId])
    render 'api/v1/verses/show'
  end

  # @route GET /api/v1/songs/:song_id/album
  def album
    @song = Song.find(params[:song_id])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/album'
  end

  # @route GET /api/v1/songs/:song_id/artist_credits
  def artist_credits
    @song = Song.find(params[:song_id])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/artist_credits'
  end

  # @route GET /api/v1/songs/:song_id/banner
  def banner
    @song = Song.find(params[:song_id])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/banner'
  end

  # @route GET /api/v1/songs/:song_id/description
  def description
    @song = Song.find(params[:song_id])
    render 'api/v1/songs/description'
  end

  # @route GET /api/v1/songs/:song_id/lyrics
  def lyrics
    @song = Song.find(params[:song_id])
    render 'api/v1/songs/lyrics'
  end

  # @route GET /api/v1/songs/:song_id/sample_credits
  def sample_credits
    @song = Song.find(params[:song_id])
    @artist_credit_types = ArtistCreditType.all
    @sample_credit_types = SampleCreditType.all
    render 'api/v1/songs/sample_credits'
  end
end
