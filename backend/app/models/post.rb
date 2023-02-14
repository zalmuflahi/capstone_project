class Post < ApplicationRecord
  belongs_to :user
  has_many :shares
  has_many :comments
  has_many :likes
  
end
