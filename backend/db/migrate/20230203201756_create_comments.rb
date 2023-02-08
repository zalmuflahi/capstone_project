class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :text
      t.integer :user_id
      t.integer :post_id
      t.integer :heart_count, default: 0

      t.timestamps
    end
  end
end
