class Review < ApplicationRecord
    belongs_to :dog
    belongs_to :user   

    validates_uniqueness_of :user_id, :scope => :dog_id
end
