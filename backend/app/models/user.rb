class User < ApplicationRecord

  has_many :posts
  has_many :shares
  has_many :comments
  has_many :shared_posts, through: :shares, source: :post
  has_many :shared_comments, through: :shares, source: :comment

  has_many :received_messages, foreign_key: :receiver_id , class_name: 'Message'
  has_many :receivers, through: :received_messages, source: :receiver
  has_many :sent_messages, foreign_key: :sender_id , class_name: 'Message'
  has_many :senders, through: :sent_messages, source: :sender

  has_secure_password

  has_many :follower_follows, foreign_key: :followee_id, class_name: "Follow"
  has_many :followers, through: :follower_follows, source: :follower
  has_many :followee_follows, foreign_key: :follower_id, class_name: "Follow"
  has_many :followees, through: :followee_follows, source: :followee
  
  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates :password, presence: true 

end
