Rails.application.routes.draw do
  root 'mapbox#index'

  get '/working', to: 'mapbox#working'
end
