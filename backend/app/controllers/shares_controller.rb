class SharesController < ApplicationController
  before_action :authenticate, only: [:create, :sharecomment]

  def create
    original_post = Post.find(params[:id])
    new_post = Post.new(caption: original_post.caption, image_url: original_post.image_url, user_id: @current_user.id)
    if new_post.save
      render json: new_post, status: :created
    else
      render json: new_post.errors, status: :unprocessable_entity
    end
  end


  def sharecomment
    original_comment = Comment.find(params[:id])
    new_post1 = Post.create!(caption: original_comment.text, user_id: @current_user.id)
    render json: new_post1
  end
end