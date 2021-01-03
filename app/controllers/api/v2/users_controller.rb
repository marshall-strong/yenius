class Api::V2::UsersController < ApplicationController

  # @route GET /api/v2/albums/:albumId/users
  # @route GET /api/v2/artists/:artistId/users
  # @route GET /api/v2/songs/:songId/users
  # @route GET /api/v2/verses/:verseId/users
  # @route GET /api/v2/users (api_v2_users)
  def index
    @users = User.all
    render :index
  end

  # @route POST /api/v2/users (api_v2_users)
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  # @route GET /api/v2/users/:userId
  def show
    @user = User.find(params[:id])
    render :show
  end

  # @route PATCH /api/v2/users/:userId
  def update
    @user = User.find(params[:id])
    if @user && @user.update_attributes(user_params)
      render :show
    elsif !@user
      render json: ['Could not locate user'], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  # @route DELETE /api/v2/users/:userId
  def destroy
    @user = User.find(params[:id])
    if @user
      @user.destroy
      render :show
    else
      render ['Could not find user']
    end
  end
  
  private
  
  def selected_user
    User.find(params[:id])
  end
  
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
