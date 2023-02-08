class PostsController < ApplicationController
 
  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = @current_user.posts.create(post_params)
    if @post.valid?
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
    render json: {message: 'Post has been obliterated.'}, status: :ok
  end

  private
    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:content, :image_url, :likes_count)
    end
end
