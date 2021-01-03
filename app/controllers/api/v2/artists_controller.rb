class Api::V2::ArtistsController < ApplicationController

  # @route GET /api/v2/albums/:albumId/artists
  # @route GET /api/v2/songs/:songId/artists
  # @route GET /api/v2/artists (api_v2_artists)
  def index
    @artists = Artist.all
    render :index
  end

  # @route GET /api/v2/artists/:artistId
  def show
    @artist = Artist.find(params[:id])
    render :show
  end

end
