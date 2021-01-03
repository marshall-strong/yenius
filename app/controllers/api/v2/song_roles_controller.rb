class Api::V2::SongRolesController < ApplicationController
  # @route GET /api/v2/song_roles (api_v2_song_roles)
  def index
    @song_roles = SongRole.all
    render 'api/v2/song_roles/index'
  end

  # @route GET /api/v2/song_roles/:id (api_v2_song_role)
  def show
    @song_role = SongRole.find(params[:id])
    render 'api/v2/song_roles/show'
  end


  private

 
end
