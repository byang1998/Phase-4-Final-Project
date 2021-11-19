class IncludesomeworkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :category

  has_many :workouts
end
