import asyncHandler from "express-async-handler"
import Workout from "../../models/workoutModel.js";


//@desc addNewWorkout
//@route POST /api/workouts
//@access private

export const workoutControllers = asyncHandler(
    async (req, res) => {
    const {name, exerciseIds} = req.body

    const workout = await Workout.create({
        name,
        exercise: exerciseIds
    })

    res.json(workout)
})

//@desc get Workout
//@route GET /api/workouts/:id
//@access private

export const getWorkout = asyncHandler(async(req,res) => {
    const workout = await Workout.findById(req.params.id)
        .populate('exercises').lean()

    const minutes = Math.ceil(workout.exercises.length * 3.7)

    res.json({...workout, minutes})
})


