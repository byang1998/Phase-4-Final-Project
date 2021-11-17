class CreateWorkoutPlans < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_plans do |t|
      t.integer :workout_id
      t.integer :plan_id
      t.string :newexercise
      t.integer :sets
      t.integer :reps

      t.timestamps
    end
  end
end
