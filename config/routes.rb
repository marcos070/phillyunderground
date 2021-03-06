Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "exhibits#index"
  resources :exhibits, only: [:index, :show, :new, :create]

  namespace :api do
    namespace :v1 do
      resources :exhibits, only: [:index, :show, :new, :create] do
      end
    end
  end


end
