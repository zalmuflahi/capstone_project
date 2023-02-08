class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :image_url
      t.string :content
      t.integer :likes_count, default: 0

      t.timestamps
    end
  end
end
