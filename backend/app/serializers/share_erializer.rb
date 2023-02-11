class ShareSerializer < ActiveModel::Serializer
    attributes :post_id, :comment_id, :user_id

    belongs_to :user
    belongs_to :post
    belongs_to :comment
end