class Api::FriendsController < ApplicationController
  def index
    render json: User.liked(current_user.friends)
  end
end
