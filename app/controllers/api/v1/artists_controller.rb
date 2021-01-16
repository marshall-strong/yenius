class Api::V1::ArtistsController < ApiController
  # @route GET /api/v1/artists (api_v1_artists)
  def index
    @upper = params[:char].upcase
    @lower = params[:char].downcase
    @artists = Artist.where("name like '#{@upper}%' OR name like '#{@lower}%'")
    render 'api/v1/artists/index'
  end

  # @route GET /api/v1/artists/:id (api_v1_artist)
  def show
    @artist = Artist.find(params[:artistId])
    render 'api/v1/artists/show'
  end
end
