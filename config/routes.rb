Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      # albums
      resources :albums, only: [:index, :show]

      # artists
      resources :artists, only: [:index, :show]
      get '/artists/index/:char', to: 'artists#artists_index'

      # comments
      # resources :comments
      get '/albums/:commentableId/comments', to: 'comments#album_comments'
      get '/artists/:commentableId/comments', to: 'comments#artist_comments'
      get '/songs/:commentableId/comments', to: 'comments#song_comments'
      get '/verses/:commentableId/comments', to: 'comments#verse_comments'

      post '/albums/:commentableId/comments', to: 'comments#create_album_comment'
      post '/artists/:commentableId/comments', to: 'comments#create_artist_comment'
      post '/songs/:commentableId/comments', to: 'comments#create_song_comment'
      post '/verses/:commentableId/comments', to: 'comments#create_verse_comment'

      # songs
      get '/songs/index/:char', to: 'songs#index'
      get '/songs/:songId', to: 'songs#show', format: :json
      get '/songs/:songId/album', to: 'songs#album', format: :json
      get '/songs/:songId/annotations', to: 'songs#annotations', format: :json
      get '/songs/:songId/artist_credits', to: 'songs#artist_credits', format: :json
      get '/songs/:songId/banner', to: 'songs#banner', format: :json
      get '/songs/:songId/description', to: 'songs#description', format: :json
      get '/songs/:songId/lyrics', to: 'songs#lyrics', format: :json
      get '/songs/:songId/sample_credits', to: 'songs#sample_credits', format: :json

      # users
      resources :users

      # verses
      resources :verses, only: [:index, :show]

      # session
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
