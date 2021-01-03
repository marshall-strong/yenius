class Api::V1::SongsController < ApplicationController
  # @route GET /api/v1/songs (api_v1_songs)
  def index
    @songs = Song.all
    render 'api/v1/songs/index'
  end

  # @route GET /api/v1/songs/:id (api_v1_song)
  def show
    @song = Song.find(params[:id])
    @artist_credit_types = ArtistCreditType.all
    @sample_credit_types = SampleCreditType.all
    render 'api/v1/songs/show'
  end

  # @route GET /api/v1/songs-index/:char
  def songs_index
    @upper = params[:char].upcase
    @lower = params[:char].downcase
    @songs = Song.where("name like '#{@upper}%' OR name like '#{@lower}%'")
    render 'api/v1/songs/index'
  end

  private

    # only need if creating new songs
    # def song_params
    #   params.require(:song).permit(:name)
    # end
end
