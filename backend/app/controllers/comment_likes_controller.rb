class CommentLikesController < ApplicationController
before_action :authenticate, only: [:toggle_comment_likes]

  def toggle_comment_likes
    # take in the post id 
    comment = Comment.find(params[:id])
    @current_user.id
    # check if user alr liked the post 
    like = CommentLike.where(user_id:@current_user.id).where(comment_id: comment.id)
    if like.length == 0 
      CommentLike.create!(user_id:@current_user.id, comment_id: comment.id)
      render json: "Added a like"
    else
      like.destroy_all
      render json: "removed like"
    end
  end
end
