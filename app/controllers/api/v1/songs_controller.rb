class Api::V1::SongsController < ApiController
  # @route GET /api/v1/songs/index/:char
  def index
    @upper = params[:char].upcase
    @lower = params[:char].downcase
    @songs = Song.where("name like '#{@upper}%' OR name like '#{@lower}%'")
    render 'api/v1/songs/index'
  end

  # @route GET /api/v1/songs/:songId
  def show
    @song = Song.find(params[:songId])
    render 'api/v1/songs/show'
  end

  # @route GET /api/v1/songs/:songId/verses/:verseId
  def verse
    @verse = Verse.find(params[:verseId])
    render 'api/v1/verses/show'
  end

  # @route GET /api/v1/songs/:songId/album
  def album
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/album'
  end

  # @route GET /api/v1/songs/:songId/annotations
  def annotations
    @song = Song.find(params[:songId])
    render 'api/v1/songs/annotations'
  end

  # @route GET /api/v1/songs/:songId/artist_credits
  def artist_credits
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/artist_credits'
  end

  # @route GET /api/v1/songs/:songId/banner
  def banner
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/songs/banner'
  end

  # @route GET /api/v1/songs/:songId/description
  def description
    @song = Song.find(params[:songId])
    render 'api/v1/songs/description'
  end

  # @route GET /api/v1/songs/:songId/lyrics
  def lyrics
    @song = Song.find(params[:songId])
    render 'api/v1/songs/lyrics'
  end

  # @route GET /api/v1/songs/:songId/sample_credits
  def sample_credits
    @song = Song.find(params[:songId])
    @artist_credit_types = ArtistCreditType.all
    @sample_credit_types = SampleCreditType.all
    render 'api/v1/songs/sample_credits'
  end


  private

    # only need if creating new songs
    # def song_params
    #   params.require(:song).permit(:name)
    # end
end
