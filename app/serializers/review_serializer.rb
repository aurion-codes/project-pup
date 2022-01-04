class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :like, :user_id, :dog_id
end
