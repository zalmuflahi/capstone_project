Rails.application.routes.draw do
  resources :messages
  resources :comments
  resources :users
  resources :posts
  get '/feed', to: 'posts#index'
  get '/posts/:id', to: 'posts#show' 
  root to: 'users#index'
  get '/users', to: 'users#index'
  get '/me', to: 'users#me'
  post '/login', to: 'users#login'
  post '/signup', to: 'users#signup'
  patch '/users/:id', to: 'users#update'
end
