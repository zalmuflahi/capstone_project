class PostsController < ApplicationController
  APP_SECRET = "ToBeOrNotToBeThatIsTheRealQuestionMyGuy"
  before_action :authenticate, only: [:create, :update, :destroy, :show, :index]

  def index
      postss = @current_user.posts
      followee_posts = []
      @current_user.followees.each do |followee|
      followee_posts += followee.posts
    end
    render json: followee_posts + postss
  end

  
  def show
    posts = @current_user.posts
    render json: posts
  end

  def post_comment
    @post = Post.find(params[:id])
    render json: @post.comments
  end

  def create
    @post = @current_user.posts.new(post_params)
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    @post = @current_user.posts.find(params[:id])
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end
  

  def destroy
    @post = @current_user.posts.find(params[:id])
    @post.destroy
    render json: {message: 'Post has been obliterated.'}, status: :ok
  end

  private

  def post_params
    params.permit(:caption, :image_url, :user_id)
  end
end
