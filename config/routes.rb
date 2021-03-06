Rails.application.routes.draw do
  
  resources :workouts, only:[:index]
  resources :workout_plans, only:[:index, :create]
  resources :plans, only: [:index, :show, :create, :update, :destroy]
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
