class UserSerializer < ActiveModel::Serializer
  attributes :username, :followees, :followers
  
  has_many :posts
  has_many :comments 
end
