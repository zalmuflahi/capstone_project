Rails.application.routes.draw do
  resources :reply_likes
  resources :comment_replies
  resources :messages

  get '/friends/:id', to: 'follows#view_followees'
  get '/search', to: 'users#index'
  get '/feed', to: 'posts#index'
  get '/posts/:id', to: 'posts#show' 
  get '/comments', to: 'comments#show'
  get '/post_comments/:id', to: 'posts#post_comment'
  get '/me', to: 'users#me'
  post '/login', to: 'users#login'
  post '/users', to: 'users#create'
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'
  post '/createcomment/:id', to: 'comments#createcomment'
  patch 'hearts/:id', to: 'comment_likes#toggle_comment_likes'
  patch '/posts/:id', to: 'posts#update'
  patch '/toggle_likes/:id', to: 'likes#toggle_likes'
  patch '/reply_likes/:id', to: 'reply_likes#show'
  post '/posts', to: 'posts#create'
  get '/share/:id', to: 'shares#create'
  get '/sharedcomment/:id', to: 'shares#sharecomment'
  post '/commentreply/:id', to: 'comment_replies#createcommentreply'
  get '/commentreply/:id', to: 'comment_replies#show'

end
