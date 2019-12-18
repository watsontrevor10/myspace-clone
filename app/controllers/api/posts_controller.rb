class Api::PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Post.all
  end

  def create
    
  end

  private 

  def set_user
    @user = User.find(params[:user_id])
  end
end
