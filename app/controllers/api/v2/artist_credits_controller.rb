class Api::V2::ArtistCreditsController < ApplicationController

  # @route GET /api/v2/artist_credits (api_v2_artist_credit_types)
  def index
    @artist_credits = ArtistCredit.all
    render :index
  end

end
