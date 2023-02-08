class CommentSerializer < ActiveModel::Serializer
  attributes :text, :user_id, :post_id, :heart_count

  belongs_to :user
  belongs_to :post
  has_many :shares
end
