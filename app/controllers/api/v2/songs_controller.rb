class Api::V2::SongsController < ApplicationController

  # @route GET /api/v2/albums/:albumId/songs
  # @route GET /api/v2/artists/:artistId/songs
  # @route GET /api/v2/songs (api_v2_songs)
  def index
    @songs = Song.all
    render :index
  end

  # @route GET /api/v2/songs/:songId
  def show
    @song = Song.find(params[:id])
    render :show
  end

  # @route GET /api/v2/songs/:songId/samples
  def samples
    @song = Song.find(params[:id])
    render :samples
  end

end
