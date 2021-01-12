Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :artists, only: [:index, :show]
      get '/artists-index/:char', to: 'artists#artists_index'

      resources :albums, only: [:index, :show]

      # resources :songs, only: [:index, :show]
      get '/songs-index/:char', to: 'songs#songs_index'

      get '/songs/song/:songId', to: 'songs#song', format: :json
      get '/songs/album/:songId', to: 'songs#song_album', format: :json
      get '/songs/annotations/:songId', to: 'songs#song_annotations', format: :json
      get '/songs/artist_credits/:songId', to: 'songs#song_artist_credits', format: :json
      get '/songs/banner/:songId', to: 'songs#song_banner', format: :json
      get '/songs/comments/:songId', to: 'songs#song_comments', format: :json
      get '/songs/description/:songId', to: 'songs#song_description', format: :json
      get '/songs/lyrics/:songId', to: 'songs#song_lyrics', format: :json
      get '/songs/sample_credits/:songId', to: 'songs#song_sample_credits', format: :json

      resources :verses, only: [:index, :show]

      resources :comments
      get '/albums/:commentableId/comments', to: 'comments#album_comments'
      get '/artists/:commentableId/comments', to: 'comments#artist_comments'
      # get '/songs/:commentableId/comments', to: 'comments#song_comments'
      get '/verses/:commentableId/comments', to: 'comments#verse_comments'

      post '/albums/:commentableId/comments', to: 'comments#create_album_comment'
      post '/artists/:commentableId/comments', to: 'comments#create_artist_comment'
      post '/songs/:commentableId/comments', to: 'comments#create_song_comment'
      post '/verses/:commentableId/comments', to: 'comments#create_verse_comment'

      resources :users

      resource :session, only: [:create, :destroy]

      resources :artist_roles
      resources :artist_credits
      resources :song_roles
      resources :song_credits
    end
  end

  # if no routes match the request, fallback to returning client/public/index.html
  #
  # This should fix the error that happen when the frontend route is somehow
  #  sent to the backend, causing an error like "no route matches /albums/undefined"
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
