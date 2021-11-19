Rails.application.routes.draw do
  
  #This is the initial route for starting up the application.
  get 'charts/bulid_chart'
  root 'charts#build_chart'
end
