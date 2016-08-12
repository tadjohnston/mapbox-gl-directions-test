Rails.application.routes.draw do
  root 'mapbox#index'

  get '/working', to: 'mapbox#working'
  get '/simple', to: 'mapbox#simple'
end
