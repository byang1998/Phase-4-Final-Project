class WorkoutPlanSerializer < ActiveModel::Serializer
  attributes :id, :workout_id, :plan_id, :sets, :reps
end
