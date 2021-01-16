class Api::V1::VersesController < ApiController
  # @route GET /api/v1/verses
  def index
    @verses = Verse.all
    render 'api/v1/verses/index'
  end

  # @route GET /api/v1/verses/:verse_id
  def show
    @verse = Verse.find(params[:verse_id])
    render 'api/v1/verses/show'
  end
end
