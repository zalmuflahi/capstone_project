class CreateReplyLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :reply_likes do |t|
      t.integer :user_id
      t.integer :comment_reply_id
      t.timestamps
    end
  end
end
