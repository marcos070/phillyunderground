Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "exhibits#index"
  resources :exhibits, only: [:index, :show, :new, :create]

  namespace :api do
    namespace :v1 do
      resources :exhibits, only: [:index, :show, :new, :create] do
        resources :checkouts, only: [:create]
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :checkouts, only: [:index, :show, :create]
    end
  end


end
