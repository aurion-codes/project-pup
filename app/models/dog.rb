class Dog < ApplicationRecord

    belongs_to :user
    has_many :reviews
    

    

    # validates :img_url, presence: true 
    # validates :name, presence: true 
    # validates :bio, presence: true 
    # validates :gender, presence: true 
    # validates :dob, presence:true
    # validates :vaccinated, presence:true
    # validates :poster_id, presence:true

   def details
   	reviews = self&.reviews&.count
   	return {
   		reviews: reviews,
   		details: self
   	}
   end

  

    
end
