if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: 'project-pup', domain: 'project-pup-json-api'
  else
    Rails.application.config.session_store :cookie_store, key: 'project-pup'
  end