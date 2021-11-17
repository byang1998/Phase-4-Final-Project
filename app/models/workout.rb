class Workout < ApplicationRecord

    has_many :workout_plans, dependent: :destroy
    has_many :plans, through: :workout_plans
end
