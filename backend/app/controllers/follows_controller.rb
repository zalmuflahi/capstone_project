class FollowsController < ApplicationController

  def create
    user_to_follow = User.find_by(username: params[:username])
    follow = Follow.new(followee_id: user_to_follow.id, follower_id: @current_user.id)
    if follow.save
      render json: follow
    else
      render json: {error: 'Could not follow user'}, status: :unprocessable_entity
    end
  end

  def destroy
    follow = @current_user.follows.find_by(followee_id: params[:followee_id])
    follow.destroy
    render json: follow
  end
end
