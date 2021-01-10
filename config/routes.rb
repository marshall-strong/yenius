Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :artists, only: [:index, :show]
      get '/artists-index/:char', to: 'artists#artists_index'

      resources :albums, only: [:index, :show]

      resources :songs, only: [:index, :show]
      get '/songs-index/:char', to: 'songs#songs_index'

      get '/songs/:songId/album', to: 'songs#show_song_album'
      get '/songs/:songId/annotations', to: 'songs#show_song_annotations'
      get '/songs/:songId/artist_credits', to: 'songs#show_song_artist_credits'
      get '/songs/:songId/banner', to: 'songs#show_song_banner'
      get '/songs/:songId/comments', to: 'songs#show_song_comments'
      get '/songs/:songId/description', to: 'songs#show_song_description'
      get '/songs/:songId/lyrics', to: 'songs#show_song_lyrics'
      get '/songs/:songId/sample_credits', to: 'songs#show_song_sample_credits'

      resources :verses, only: [:index, :show]

      resources :comments
      get '/albums/:commentableId/comments', to: 'comments#album_comments'
      get '/artists/:commentableId/comments', to: 'comments#artist_comments'
      get '/songs/:commentableId/comments', to: 'comments#song_comments'
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
