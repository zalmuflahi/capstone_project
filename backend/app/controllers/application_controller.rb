class ApplicationController < ActionController::API
   APP_SECRET = "ToBeOrNotToBeThatIsTheRealQuestionMyGuy"

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
end