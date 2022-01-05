Rails.application.routes.draw do
  
  resources :users
  resources :reviews
  resources :dogs do
    collection do 
      get :user_dogs
    end
  end
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/sessions", to: "sessions#index"
  post "/login", to: "sessions#create"
  post "/logout", to: "sessions#destroy"
  get "/me", to: "users#showme"
  get "/logged_in", to: "sessions#is_logged_in?"
end
