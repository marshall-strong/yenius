class Api::V2::AlbumsController < ApplicationController

  # @route GET /api/v2/artists/:artistId/albums
  # @route GET /api/v2/albums (api_v2_albums)
  def index
    if params[:artistId]
      artist = Artist.find(params[:artistId])
      @albums = artist.albums
    else
      @albums = Album.all
    end
    
    render :index
  end

  # @route GET /api/v2/albums/:albumId (api_v2)
  def show
    @album = Album.find(params[:albumId])
    render :show
  end

end
