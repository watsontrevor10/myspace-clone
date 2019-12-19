Rails.application.routes.draw do
  namespace :api do
    get 'friends/index'
  end
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :profiles
    resources :friends
    resources :posts, only: [:index, :create, :show, :update, :destroy]
  end
end
