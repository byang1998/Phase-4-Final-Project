class PlansController < ApplicationController
    def index
        render json: Plan.all
    end

  def create
    new_plan = Plans.create(plan_params)
    if new_plan.valid?
        render json: new_plan.workout, status: 201
    
    else
        render json: {message: new_plan.errors.full_messages}, status: 422
    end
    end

    def destroy
        plan = Plan.find_by(id: params[:id])
        if plan
            plan.destroy
            render json: {message: 'Plan deleted'}, status: :no_content
        else 
            render json: { error: "Plan not found" }, status: :not_found
        end
    end

    private

    def plan_params
        params.permit(:name, :category, :user_id)
    end
    end