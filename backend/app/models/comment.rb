class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :post
    has_many :shares
    has_many :comment_replies
    has_many :comment_likes
end
