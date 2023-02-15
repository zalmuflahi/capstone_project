class CommentReply < ApplicationRecord
    belongs_to :user
    belongs_to :comment
    has_many :shares
    has_many :comment_reply_likes

end
