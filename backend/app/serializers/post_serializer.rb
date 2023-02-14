class PostSerializer < ActiveModel::Serializer
  attributes :id, :caption, :image_url, :likes_count
  
  def likes_count
    Like.where(post_id:object.id).length
  end
end
