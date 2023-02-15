class ReplyLikesController < ApplicationController
 before_action :authenticate, only: [:show]

  def show
    # take in the post id 
    comment_reply = CommentReply.find(params[:id])
    @current_user.id
    # check if user alr liked the post 
    like = ReplyLike.where(user_id:@current_user.id).where(comment_reply_id: comment_reply.id)
    if like.length == 0 
      ReplyLike.create!(user_id:@current_user.id, comment_reply_id: comment_reply.id)
      render json: "Added a like"
    else
      like.destroy_all
      render json: "removed like"
    end
  end
end
