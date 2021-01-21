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

  # @route PATCH /api/v1/users/:user_id
  # @route PUT /api/v1/users/:user_id
  def update
    @user = User.find(params[:user_id])
    if @user && @user.update_attributes(user_params)
      render 'api/v1/session/current_user';
    elsif !@user
      render json: ['Could not locate user'], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  # @route GET /api/v1/users/:user_id
  def show
    @user = User.find(params[:user_id])
    render 'api/v1/users/show'
  end

  # @route DELETE /api/v1/users/:user_id
  def destroy
    @user = User.find(params[:user_id])
    if @user
      @user.destroy
      render :show
    else
      render ['Could not find user']
    end
  end

  # @route GET /api/v1/users/top_scholars
  def top_scholars
    @users = User.order("authored_comments_count desc").limit(10).all
    render 'api/v1/users/index'
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
