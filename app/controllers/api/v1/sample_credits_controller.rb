class Api::V1::SampleCreditsController < ApiController
  # @route GET /api/v1/sample_credits (api_v1_sample_credits)
  def index
    @sample_credits = SampleCredit.all
    render 'api/v1/sample_credits/index'
  end

  # @route GET /api/v1/sample_credits/:id (api_v1_sample_credit)
  def show
    @sample_credit = SampleCredit.find(params[:id])
    render 'api/v1/sample_credits/show'
  end


  private


end
