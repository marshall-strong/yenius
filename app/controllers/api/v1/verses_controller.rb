class Api::V1::VersesController < ApplicationController
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


  private

    # only need if creating new verses
    # def verse_params
    #   params.require(:verse).permit(:name)
    # end
end
