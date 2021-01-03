class Api::V1::ArtistCreditTypesController < ApiController
  # @route GET /api/v1/artist_credit_types (api_v1_artist_credit_types)
  def index
    @artist_credit_types = ArtistCreditType.all
    render 'api/v1/artist_credit_types/index'
  end

  # @route GET /api/v1/artist_credit_types/:id (api_v1_artist_credit_type)
  def show
    @artist_credit_type = ArtistCreditType.find(params[:id])
    render 'api/v1/artist_credit_types/show'
  end


  private


end
