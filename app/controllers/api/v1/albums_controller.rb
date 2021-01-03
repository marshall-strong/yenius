class Api::V1::AlbumsController < ApplicationController
  # @route GET /api/v1/albums (api_v1_albums)
  def index
    @albums = Album.all
    render 'api/v1/albums/index'
  end

  # def show
  #   @album = Album.find(params[:id])
  #   render 'api/v1/albums/show'
  # end

  # @route GET /api/v1/albums/:id (api_v1_album)
  def show
    @album = Album.find(params[:id])
    render :show
  end

  private

  # only need if creating new albums
  # def album_params
  #   params.require(:album).permit(:name)
  # end
end
