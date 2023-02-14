class UserSerializer < ActiveModel::Serializer
  attributes :username, :followees, :followers, :posts
  
  has_many :posts
  has_many :comments 
  
end
