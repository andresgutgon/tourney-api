Tourney::Application.routes.draw do
  resources :api_keys, except: [:new, :edit]
  resources :users, except: [:new, :edit, :destroy]
  post 'session' => 'session#create'
end
