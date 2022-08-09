import asyncHandler from "express-async-handler";
import Exercise from "../../models/exerciseModel.js";

//@desc createNewExercise
//@route GET/api/exercise
//@access private

export const addNewExercise = asyncHandler(
    async (req, res) => {

        const {
            name,
            times,
            imageId
        } = req.body

        const exercise = await Exercise.create({
            name,
            times,
            imageId
        })

        res.json(exercise)
    })