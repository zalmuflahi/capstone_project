class SharesController < ApplicationController
  before_action :set_post, only: [:create]

  def create
    @share = @current_user.shares.new(post_id: @post.id)
    if @share.save
      render json: @share, status: :created
    else
      render json: @share.errors, status: :unprocessable_entity
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_id, :comment_id])
  end
end
