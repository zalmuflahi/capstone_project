class RoomsController < ApplicationController
    before_action :authenticate, only: [:user_rooms]
    def user_rooms
        my_rooms = @current_user.rooms 
        render json: my_rooms
    end

end

