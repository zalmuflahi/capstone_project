class UsersController < ApplicationController
  APP_SECRET = "ToBeOrNotToBeThatIsTheRealQuestionMyGuy"
  before_action :authenticate, only: [:me, :update, :destroy]

  def me
    render json: {user: @current_user}
  end

  
  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
        #encode a token to send back
        token = JWT.encode({user_id: user.id, username: user.username}, APP_SECRET, 'HS256')
        render json: { user: user, token: token }, status: 200
    else 
        render json: {error: 'nah jit trippin'}, status: 420
    end
  end

  # def show
  #   user = User.find(params[:id])
  #   if @current_user.id == user.id
  #       render json: { user: user }, status: 200
  #   else
  #   render json: {error: 'Fuck up outta here'}, status: 420
  #   end
  # end

  def create
    user = User.new(user_params)
    if user.save
      render json: {user: user, token: nil}, status: 200
    else
      render json: {error: user.errors.full_messages[0]}, status: :unprocessable_entity
    end
  end

     def update
        user =  @current_user.update(user_params)
        if user
          render json:  @current_user, status: :ok
        else
          render json: { errors: @user.errors }, status: :unprocessable_entity
        end
      end

  def destroy
  user = User.find(params[:id])
  if @current_user.id == user.id  
    user.destroy
    render json: 'Account was successfully banished to the shadow realm.'
  else
    render json: {error: 'Unauthorized to delete user'}, status: :unauthorized
  end
  end



  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:first_name, :last_name, :username, :email, :password)
    end
  end