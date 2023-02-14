class PostSerializer < ActiveModel::Serializer
  attributes :caption, :image_url, :comments, :shares, :likes
  
  belongs_to :user
  has_many :comments
  has_many :shares
  has_many :likes

end
