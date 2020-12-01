Rails.application.routes.draw do
  resources :contact, only: [ :index ]
  resources :questions, only: [ :index ]
  resources :news, only: [ :index ]
  devise_for :users
  resources :users
  resources :orders
  resources :line_items
  resources :carts
  root to: "store#index"
  resources :products
  resources :products do
    get :who_bought, on: :member
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
