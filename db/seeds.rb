# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts " Seeding users... "
User.create!([
    {
        username: "joe"
    },
    {
        username: "don"
    }
])

puts " Seeding plans... "
Plan.create!([
    {
        name: "Two Month Strength Builder",
        category: "Strength Training",
        user_id: 1
    },

    {
        name: "PowerBuilding Workout Split",
        category: "PowerBuilding",
        user_id: 1
    },
    {
        name: "Massbuilding",
        category: "Hypertrophy",
        user_id: 2
    },
    {
        name: "Powerlifting Package",
        category: "Powerlifting",
        user_id: 1
    },
    {
        name: "AB Burner and Weight Loss",
        category: "General Fitness",
        user_id: 1
    },

    {
        name: "Spring Break",
        category: "BodyBuilding",
        user_id: 1
    }

])

puts " Seeding workouts..."
Workout.create!([
    {
        name: "Chest",
        exercises: "Bench Press"
    },
          {
              name: "Chest",
          exercises: "Dumbbell Press"
       },
       {
           name: "Chest",
           exercises: "Incline Bench Press"
       },
       {
        name: "Chest",
        exercises: "Dummbell Fly"
    },
          {
              name: "Chest",
          exercises: "Cable Chest Fly"
       },
       {
           name: "Back",
           exercises: "Lat Pulldown"
       },
       {
        name: "Back",
        exercises: "Overhand Roll"
    },
          {
              name: "Back",
          exercises: "Deadlift"
       },
       {
           name: "Back",
           exercises: "Dumbbell Row"
       },
       {
        name: "Legs",
        exercises: "Squat"
    },
          {
              name: "Legs",
          exercises: "Leg Press"
       },
       {
           name: "Legs",
           exercises: "Hamstring Curl"
       },

       {
        name: "Abs",
        exercises: "Sprinter Crunches"
    },
          {
              name: "Abs",
          exercises: "Bicycles"
       },
       {
           name: "Abs",
           exercises: "Crunches"
       },
       {
        name: "Cardio",
        exercises: "Treadmill"
    },
          {
              name: "Cardio",
          exercises: "Stairmasters"
       }
        ])

        puts " adding workouts to plans..."


        Plan.all.each do |plan|
            rand(1..5).times do
                #get a random workout
                workout = Workout.find(Workout.pluck(:id).sample)

                WorkoutPlan.create!(plan_id: plan.id, workout_id: workout.id, sets: rand(3..5), reps: rand(3..12))

         
        end
    end

        puts " Done seeding!"