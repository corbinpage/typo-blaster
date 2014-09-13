Rails.application.routes.draw do
  post 'typos/create'

  root to: 'visitors#index'
  devise_for :users
  resources :users

end
