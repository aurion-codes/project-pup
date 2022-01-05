class User < ApplicationRecord
    has_secure_password
    
    has_many :dogs
    has_many :reviews
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true

    
end
