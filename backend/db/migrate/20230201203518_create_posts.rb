class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :user_username
      t.string :image_url
      t.string :caption

      t.timestamps
    end
  end
end
