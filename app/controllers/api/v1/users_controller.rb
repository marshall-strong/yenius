class Api::V1::UsersController < ApplicationController
  # @route POST /api/v1/users (api_v1_users)
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/v1/session/current_user';
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  # @route PATCH /api/v1/users/:id (api_v1_user)
  # @route PUT /api/v1/users/:id (api_v1_user)
  def update
    @user = selected_user
    if @user && @user.update_attributes(user_params)
      render 'api/v1/session/current_user';
    elsif !@user
      render json: ['Could not locate user'], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  # @route GET /api/v1/users/:id (api_v1_user)
  def show
    @user = selected_user
  end

  # @route GET /api/v1/users (api_v1_users)
  def index
    @users = User.all
  end

  # @route DELETE /api/v1/users/:id (api_v1_user)
  def destroy
    @user = selected_user
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
