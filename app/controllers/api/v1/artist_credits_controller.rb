class Api::V1::ArtistCreditsController < ApplicationController
  # @route GET /api/v1/artist_credits (api_v1_artist_credits)
  def index
    @artist_credits = ArtistCredit.all
    render 'api/v1/artist_credits/index'
  end

  # @route GET /api/v1/artist_credits/:id (api_v1_artist_credit)
  def show
    @artist_credit = ArtistCredit.find(params[:id])
    render 'api/v1/artist_credits/show'
  end


  private


end
