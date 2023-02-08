class CommentsController < ApplicationController
  # GET /comments/1
  def show
    post = Post.find(params[:post_id])
    if post
      render json: post.comments
    else
      render json: {error: 'Post not found'}, status: :not_found
    end
  end

  # POST /comments
 def create 
        comment = Comment.create!(comment_params)
        if comment
            render json: 'Comment has been posted'
        else
            render json: comment.errors, status: :unprocessable_entity
        end
    end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
 # Only allow a list of trusted parameters through.
    def comment_params
      params.permit(:text, :user_id, :post_id, :heart_count)
    end
end
