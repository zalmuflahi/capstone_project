class ApplicationController < ActionController::API
   APP_SECRET = "ToBeOrNotToBeThatIsTheRealQuestionMyGuy"

   rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
   rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

   def authenticate
    begin
      header = request.headers["Authorization"]
      header = header.split(" ").last if header
      decoded = JWT.decode(header, APP_SECRET , true, { algorithm: "HS256" })
      @current_user = User.find(decoded.first["user_id"])
    rescue JWT::DecodeError, ActiveRecord::RecordNotFound
      render json: { error: "Not Authorized" }, status: 401
    end  

  end  


    private
    def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found", message: "Email / Username is case sensitive" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end