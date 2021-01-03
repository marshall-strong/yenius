class Api::V2::SessionsController < ApplicationController

  # @route POST /api/v2/session (api_v2_session)
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Nope. Wrong credentials!'], status: 401
    else
      login!(@user)
      render 'api/v2/users/show';
    end
  end

  # @route DELETE /api/v2/session (api_v2_session)
  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end

end
