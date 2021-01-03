class Api::V2::VersesController < ApplicationController

  # @route GET /api/v2/songs/:songId/verses
  def index
    @verses = Verse.all
    render :index
  end

  # @route GET /api/v2/verses/:verseId
  def show
    @verse = Verse.find(params[:id])
    render :show
  end

end
