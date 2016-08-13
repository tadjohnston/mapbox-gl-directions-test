Rails.application.routes.draw do
  root 'mapbox#index'

  get '/working', to: 'mapbox#working'
  get '/simple', to: 'mapbox#simple'
  get '/straight', to: 'mapbox#straight'
end
