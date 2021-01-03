Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :artists, only: [:index, :show]
      get '/artists-index/:char', to: 'artists#artists_index'

      resources :albums, only: [:index, :show]

      resources :songs, only: [:index, :show]
      get '/songs-index/:char', to: 'songs#songs_index'

      resources :verses, only: [:index, :show]
      
      resources :comments
      get '/albums/:commentableId/comments', to: 'comments#album_comments'
      get '/artists/:commentableId/comments', to: 'comments#artist_comments'
      get '/songs/:commentableId/comments', to: 'comments#song_comments'
      get '/verses/:commentableId/comments', to: 'comments#verse_comments'

      resources :users
      
      resource :session, only: [:create, :destroy]

      resources :artist_roles
      resources :artist_credits
      resources :song_roles
      resources :song_credits
    end

    namespace :v2 do

      get '/albums', to: 'albums#index'
      get '/albums/:albumId', to: 'albums#show'
      get '/albums/:albumId/artists', to: 'artists#index'
      get '/albums/:albumId/songs', to: 'songs#index'
      get '/albums/:albumId/comments', to: 'comments#index'
      get '/albums/:albumId/users', to: 'users#index'

      get '/artist_credit_types', to: 'artist_credit_types#index'

      get '/artist_credits', to: 'artist_credits#index'

      get '/artists', to: 'artists#index'
      get '/artists/:artistId', to: 'artists#show'
      get '/artists/:artistId/albums', to: 'albums#index'
      get '/artists/:artistId/songs', to: 'songs#index'
      get '/artists/:artistId/comments', to: 'comments#index'
      get '/artists/:artistId/users', to: 'users#index'
      
      post '/comments', to: 'comments#create'
      patch '/comments/:commentId', to: 'comments#update'
      delete '/comments/:commentId', to: 'comments#destroy'
      
      get '/sample_credit_types', to: 'sample_credit_types#index'

      get '/sample_credits', to: 'sample_credits#index'
      
      post '/session', to: 'sessions#create'
      delete '/session', to: 'sessions#destroy'

      get '/songs', to: 'songs#index'
      get '/songs/:songId', to: 'songs#show'
      get '/songs/:songId/artists', to: 'artists#index'
      get '/songs/:songId/verses', to: 'verses#index'
      get '/songs/:songId/comments', to: 'comments#index'
      get '/songs/:songId/users', to: 'users#index'
      get '/songs/:songId/samples', to: 'songs#samples'
      
      get '/users', to: 'users#index'
      post '/users', to: 'users#create'
      get '/users/:userId', to: 'users#show'
      patch '/users/:userId', to: 'users#update'
      delete '/users/:userId', to: 'users#destroy'

      get '/verses/:verseId', to: 'verses#show'
      get '/verses/:verseId/comments', to: 'comments#index'
      get '/verses/:verseId/users', to: 'users#index'
    end
  end
end
