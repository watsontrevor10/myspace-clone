class Api::ProfilesController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: User.random_friend(current_user.friends)
  end

  def update
    current_user.friends << params[:id].to_i
    current_user.save
  end

end
