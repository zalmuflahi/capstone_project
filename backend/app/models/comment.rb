class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :post
    has_many :shares
    has_many :likes
end
