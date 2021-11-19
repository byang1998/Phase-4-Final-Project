class WorkoutPlansController < ApplicationController
 
def index
    render json: WorkoutPlan.all
end

def create
    
    new_workoutplan = WorkoutPlan.create(workoutplan_params)
    if new_workoutplan.valid?
        render json: new_workoutplan.workout

    else
        render json: {message: new_workoutplan.errors.full_messages}, status: 422

    end
end


private

def workoutplan_params
    params.require(:workout_plan).permit(:sets, :reps, :workout_id, :plan_id)
end
end