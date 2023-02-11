class PostSerializer < ActiveModel::Serializer
  attributes :caption, :image_url, :likes_count
  
  belongs_to :user
  has_many :comments
  has_many :shares
end
