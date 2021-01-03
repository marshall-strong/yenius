class Api::V2::SampleCreditTypesController < ApplicationController

  # @route GET /api/v2/sample_credit_types (api_v2_sample_credit_types)
  def index
    @sample_credit_types = SampleCreditType.all
    render :index
  end
 
end
