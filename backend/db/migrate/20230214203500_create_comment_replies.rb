class CreateCommentReplies < ActiveRecord::Migration[6.1]
  def change
    create_table :comment_replies do |t|
         t.string :reply
      t.integer :user_id
      t.integer :comment_id

      t.timestamps
    end
  end
end
