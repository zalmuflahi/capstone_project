class CreateShares < ActiveRecord::Migration[6.1]
  def change
    create_table :shares do |t|
      t.integer :user_id
      t.integer :post_id
      t.integer :comment_id
      t.timestamps
    end
  end
end
