Rails.application.routes.draw do
  
  resources :users
  resources :reviews
  resources :dogs
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/sessions", to: "sessions#index"
  post "/login", to: "sessions#create"
  get "/me", to: "users#showme"
  delete "/logout", to: "sessions#destroy"
end
