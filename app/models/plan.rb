class Plan < ApplicationRecord

    belongs_to :user
    has_many :workout_plans, dependent: :destroy
    has_many :workouts, through: :workout_plans
end
