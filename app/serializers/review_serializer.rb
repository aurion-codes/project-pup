class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :dog_id
end
