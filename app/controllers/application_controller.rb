class ApplicationController < ActionController::Base
  protect_from_forgery
  layout Proc.new { |controller| controller.devise_controller? ? 'template_basic' : 'application' }
end
