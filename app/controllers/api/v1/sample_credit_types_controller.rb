class Api::V1::SampleCreditTypesController < ApiController
  # @route GET /api/v1/sample_credit_types (api_v1_sample_credit_types)
  def index
    @sample_credit_types = SampleCreditType.all
    render 'api/v1/sample_credit_types/index'
  end

  # @route GET /api/v1/sample_credit_types/:id (api_v1_sample_credit_type)
  def show
    @sample_credit_type = SampleCreditType.find(params[:id])
    render 'api/v1/sample_credit_types/show'
  end


  private

 
end
