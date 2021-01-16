class Api::V1::VersesController < ApiController
  # @route GET /api/v1/verses (api_v1_verses)
  def index
    @verses = Verse.all
    render 'api/v1/verses/index'
  end

  # @route GET /api/v1/verses/:id (api_v1_verse)
  def show
    @verse = Verse.find(params[:id])
    render 'api/v1/verses/show'
  end
end
