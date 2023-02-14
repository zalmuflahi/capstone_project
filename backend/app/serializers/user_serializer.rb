class UserSerializer < ActiveModel::Serializer
  attributes :username, :followees, :followers, :posts
  
end
