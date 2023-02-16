class MessageChannel < ApplicationCable::Channel
  def subscribed
   @room = Room.find(params[:room])
   stream_for @room
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    stop_all_streams
  end
end
