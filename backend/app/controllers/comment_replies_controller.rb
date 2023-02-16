class CommentRepliesController < ApplicationController
   APP_SECRET = "ToBeOrNotToBeThatIsTheRealQuestionMyGuy"
  before_action :authenticate, only: [:createcommentreply, :update, :destroy, :show, :hearts]

  def show
    comment_reply = @current_user.comment_replies
    render json: comment_reply
  end

  def createcommentreply
    comment_reply = CommentReply.create!(reply:params[:reply],user_id:@current_user.id, comment_id: params[:id])
    render json: comment_reply
  end

  # PATCH/PUT /comments/1
   def update
    @comment_reply = @current_user.comments.find(params[:id])
    if @comment_reply.update(comment_res)
      render json: @comment_reply
    else
      render json: @comment_reply.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment_reply = @current_user.comments.find(params[:id])
    @comment_reply.destroy
    render json: {message: 'Comment has been obliterated.'}, status: :ok
  end

  private
 # Only allow a list of trusted parameters through.
    def comment_res
      params.permit(:reply, :user_id, :comment_id)
    end
end
