class Api::V1::SessionsController < ApplicationController
  # @route POST /api/v1/session (api_v1_session)
  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Nope. Wrong credentials!'], status: 401
    else
      login!(@user)
      render 'api/v1/session/current_user';
    end
  end

  # @route DELETE /api/v1/session (api_v1_session)
  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end
end
