Rails.application.routes.draw do
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root to: 'home#index'

  namespace :api do 
    resources :folders do
      resources :todos
    end
  end

  get '*path', to: 'home#index', via: :all
end
