class Api::V2::ArtistCreditTypesController < ApplicationController

  # @route GET /api/v2/artist_credit_types (api_v2_artist_credit_types)
  def index
    @artist_credit_types = ArtistCreditType.all
    render :index
  end

end
