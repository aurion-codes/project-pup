class Dog < ApplicationRecord

    belongs_to :adopter_id, class_name: "User", foreign_key: "adopter_id"
    belongs_to :poster_id, class_name: "User", foreign_key: "poster_id"

    has_many :users
    has_many :reviews, through: :users

    validates :img_url presence: true 
    validates :name, presence: true 
    validates :bio, presence: true 
    validates :gender presence: true 
    validates :dob presence:true


  

    
end
