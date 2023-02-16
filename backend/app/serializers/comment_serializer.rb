class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :heart_count
  
  def heart_count
    CommentLike.where(comment_id:object.id).length
  end
end