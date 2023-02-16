class LikesController < ApplicationController
  before_action :authenticate, only: [:toggle_likes]

  def toggle_likes
    # take in the post id 
    post = Post.find(params[:id])
    @current_user.id
    # check if user alr liked the post 
    like = Like.where(user_id:@current_user.id).where(post_id: post.id)
    if like.length == 0 
      Like.create!(user_id:@current_user.id,post_id:post.id)
      render json: "Added a like"
    else
      like.destroy_all
      render json: "removed like"
    end
  end
end
