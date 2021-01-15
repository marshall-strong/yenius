class Api::V1::ArtistsController < ApiController
  # @route GET /api/v1/artists (api_v1_artists)
  def index
    @artists = Artist.all
    render 'api/v1/artists/index'
  end

  # @route GET /api/v1/artists/:id (api_v1_artist)
  def show
    @artist = Artist.find(params[:id])
    render 'api/v1/artists/show'
  end

  # @route GET /api/v1/artists/index/:char
  def artists_index
    @upper = params[:char].upcase
    @lower = params[:char].downcase
    @artists = Artist.where("name like '#{@upper}%' OR name like '#{@lower}%'")
    render 'api/v1/artists/index'
  end

  private

    # only need if creating new albums
    # def artist_params
    #   params.require(:artist).permit(:name)
    # end
end
