class Api::V2::SampleCreditsController < ApplicationController

  # @route GET /api/v2/sample_credits (api_v2_sample_credits)
  def index
    @sample_credits = SampleCredit.all
    render :index
  end

end
