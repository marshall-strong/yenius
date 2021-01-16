Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get  '/albums',                        to: 'albums#index'
      get  '/albums/:album_id',              to: 'albums#show'
      get  '/albums/:album_id/comments',     to: 'comments#album_comments'
      post '/albums/:album_id/comments',     to: 'comments#create_album_comment'

      get  '/artists/index/:char',           to: 'artists#index'
      get  '/artists/:artist_id',            to: 'artists#show'
      get  '/artists/:artist_id/comments',   to: 'comments#artist_comments'
      post '/artists/:artist_id/comments',   to: 'comments#create_artist_comment'

      get  '/songs/index/:char',             to: 'songs#index'
      get  '/songs/:song_id',                to: 'songs#show'
      get  '/songs/:song_id/album',          to: 'songs#album'
      get  '/songs/:song_id/annotations',    to: 'songs#annotations'
      get  '/songs/:song_id/artist_credits', to: 'songs#artist_credits'
      get  '/songs/:song_id/banner',         to: 'songs#banner'
      get  '/songs/:song_id/description',    to: 'songs#description'
      get  '/songs/:song_id/lyrics',         to: 'songs#lyrics'
      get  '/songs/:song_id/sample_credits', to: 'songs#sample_credits'
      get  '/songs/:song_id/comments',       to: 'comments#song_comments'
      post '/songs/:song_id/comments',       to: 'comments#create_song_comment'

      get  '/verses/:verse_id',              to: 'verses#show'
      get  '/verses/:verse_id/comments',     to: 'comments#verse_comments'
      post '/verses/:verse_id/comments',     to: 'comments#create_verse_comment'

      resources :users

      resource :session, only: [:create, :destroy]
    end
  end

  # if no routes match the request, fallback to returning client/public/index.html
  # This should fix the error that happen when the frontend route is somehow
  #  sent to the backend, causing an error like "no route matches /albums/undefined"
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
