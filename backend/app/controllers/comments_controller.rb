class CommentsController < ApplicationController
  APP_SECRET = "ToBeOrNotToBeThatIsTheRealQuestionMyGuy"
  before_action :authenticate, only: [:createcomment, :update, :destroy, :show, :hearts]

  def show
    comments = @current_user.comments
    render json: comments
  end

  def createcomment
    comment = Comment.create!(text:params[:text],user_id:@current_user.id,post_id:params[:id])
    render json: comment
  end

  # PATCH/PUT /comments/1
   def update
    @comment = @current_user.comments.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment = @current_user.comments.find(params[:id])
    @comment.destroy
    render json: {message: 'Comment has been obliterated.'}, status: :ok
  end

  private
 # Only allow a list of trusted parameters through.
    def comment_params
      params.permit(:text, :user_id, :post_id)
    end
end
