class Share < ApplicationRecord
    belongs_to :user
    belongs_to :post
    belongs_to :comments
end
