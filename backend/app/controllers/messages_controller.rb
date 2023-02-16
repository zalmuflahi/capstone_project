class MessagesController < ApplicationController
  before_action :authenticate, only: [:create, :show, :index]

  def index
    render json: Message.all
  end

  def show
    render json: Message.find_by!(id: params[:id])
  end

  def create
    message = Message.create!(sms: params[:sms], user_id: @current_user.id, room_id: room.id)
    ActionCable.server.broadcast('message_channel', { message: message })
    render json: message
  end
end

