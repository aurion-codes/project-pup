class Dog < ApplicationRecord
    has_many :users
    has_many :reviews, through: :users
end
