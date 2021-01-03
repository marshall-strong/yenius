class Api::V2::ArtistRolesController < ApplicationController
  # @route GET /api/v2/artist_roles (api_v2_artist_roles)
  def index
    @artist_roles = ArtistRole.all
    render 'api/v2/artist_roles/index'
  end

  # @route GET /api/v2/artist_roles/:id (api_v2_artist_role)
  def show
    @artist_role = ArtistRole.find(params[:id])
    render 'api/v2/artist_roles/show'
  end


  private


end
