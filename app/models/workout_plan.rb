class WorkoutPlan < ApplicationRecord

belongs_to :plan
belongs_to :workout

validates :reps,numericality:{greater_than_or_equal_to:1, less_than_or_equal_to:12}
validates :sets,numericality:{greater_than_or_equal_to:1, less_than_or_equal_to:5}
end
