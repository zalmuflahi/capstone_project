class Room < ApplicationRecord
    has_many :users
    has_many :messages
    has_many :chats
    has_many :users, through: :chats
end
