class ApplicationController < ActionController::Base
  # https://api.rubyonrails.org/classes/ActionController/RequestForgeryProtection.html
  protect_from_forgery unless: -> { request.format.json? }

  def fallback_index_html
    render :file => 'public/index.html'
  end

  helper_method :current_user, :signed_in?
  private

  def current_user
    # No session_token, no signed in user
    return nil unless session[:session_token]
    # Return the user associated with the session_token (if token is valid)
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    # sets the session_token for the session equal to the user's newly reset session_token
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logged_in?
    # a user is signed in if current_user is NOT nil
    !current_user.nil?
  end

  def logout!
    # reset the current_user's session_token
    current_user.try(:reset_session_token!)
    # reset the session
    session[:session_token] = nil
    # we are moving the redirecting to a new method...
    # redirect_to new_session_url
  end

  def require_logged_out
    # Prevent signed-in users from seeing certain pages (like the login page)
    redirect_to user_url(current_user) if logged_in?
  end

  def require_logged_in
    # Prevent signed-out users from seeing certain pages (like edit or post forms)
    redirect_to new_session_url unless logged_in?
  end
end
