class Message < ApplicationRecord
beloongs_to :user
belongs_to :room 
end
