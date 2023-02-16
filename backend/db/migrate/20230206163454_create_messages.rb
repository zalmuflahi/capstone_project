class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :sms
      t.integer :user_id

      t.timestamps
    end
  end
end
