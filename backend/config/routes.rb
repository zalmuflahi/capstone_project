Rails.application.routes.draw do
  resources :likes
  resources :messages
  get '/feed', to: 'posts#index'
  get '/posts/:id', to: 'posts#show' 
  get '/comments', to: 'comments#show'
  get '/post_comments/:id', to: 'posts#post_comment'
  root to: 'users#index'
  get '/me', to: 'users#me'
  post '/login', to: 'users#login'
  post '/users', to: 'users#create'
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'
  post '/createcomment/:id', to: 'comments#createcomment'
  patch 'hearts/:id', to: 'comments#hearts'
  patch '/posts/:id', to: 'posts#update'
  patch '/likes/:id', to: 'posts#likes'
  post '/posts', to: 'posts#create'
  get '/share/:id', to: 'shares#create'
  get '/sharedcomment/:id', to: 'shares#sharecomment'
end
