class CommentReplySerializer < ActiveModel::Serializer
  attributes :id, :reply, :heart_count

  def heart_count
    ReplyLike.where(comment_reply_id:object.id).length
  end
end
