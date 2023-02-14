class LikeSerializer < ActiveModel::Serializer
  attributes :user_id, :post_id, :comment_id
end
