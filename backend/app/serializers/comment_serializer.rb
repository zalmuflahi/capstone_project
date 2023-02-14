class CommentSerializer < ActiveModel::Serializer
  attributes :text, :user_id, :post_id, :likes, :shares, :id

  belongs_to :user
  belongs_to :post
  has_many :shares
  has_many :likes

end
