class Message < ApplicationRecord
belongs_to :user
belongs_to :room
    def username
        user.username
    end
end
