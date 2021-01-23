class Api::V1::ArtistsController < ApiController
  # @route GET /api/v1/artists/top_artists
  def top_artists
    @artists = Artist.where("top_artist_number IS NOT NULL")
    render 'api/v1/artists/top_artists'
  end

  # @route GET /api/v1/artists/index/:char
  def index
    @upper = params[:char].upcase
    @lower = params[:char].downcase
    @artists = Artist.where("name like '#{@upper}%' OR name like '#{@lower}%'")
    render 'api/v1/artists/index'
  end

  # @route GET /api/v1/artists/:artist_id
  def show
    @artist = Artist.find(params[:artist_id])
    render 'api/v1/artists/show'
  end
end
