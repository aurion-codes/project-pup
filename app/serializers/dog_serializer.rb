class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :dob, :breed, :bio, :img_url, :adopted, :vaccinated, :user_id

end
