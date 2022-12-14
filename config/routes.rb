Rails.application.routes.draw do
  resources :charts 
  namespace :api do
    resources :prices
  end
end
