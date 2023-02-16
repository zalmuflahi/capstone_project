class MessagesController < ApplicationController
  before_action :authenticate, only: [:create, :show, :index]

  def index
    render json: Message.all
  end

  def show
    render json: Message.find_by!(id: params[:id])
  end
  def chat_messages
    room = Room.find(params[:uuid])
    messages = room.messages
    render json: messages
  end
  def create
    room = Room.find(params[:room_id])
    message = Message.create!(sms: params[:sms], user_id: @current_user.id, room_id: room.id)
    MessageChannel.broadcast_to(room,{
      message: MessageSerializer.new(message)
    })
    render json: message
  end
end
