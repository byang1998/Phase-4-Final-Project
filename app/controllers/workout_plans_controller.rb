class WorkoutPlansController < ApplicationController
 

def create
    new_workoutplan = WorkoutPlan.create(workoutplan_params)
    if new_workoutplan.valid?
        render json: new_workoutplan.plan, status: 201

    else
        render json: {message: new_workoutplan.errors.full_messages}, status: 422

    end
end


private

def workoutplan_params
    params.permit(:newexercise, :sets, :reps, :workout_id, :plan_id)
end
end