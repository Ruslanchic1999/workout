import asyncHandler from "express-async-handler";
import ExerciseLog from "../../../models/exerciseLogModel.js";
import {reBuildTimes} from "../../../helpers/reBuildTimes.js";

//@desc create New ExerciseLog
//@route POST/api/exercise/log
//@access private

export const createNewExercise = asyncHandler(
    async (req, res) => {

        const {exerciseId, times} = req.body

        let timesArray = []

        for (let i = 0; i < times; i++) {
            timesArray.push({
                weight: 0,
                repeat: 0
            })
        }

        const exerciseLog = await ExerciseLog.create({
            user: req.user._id,
            exercise: exerciseId,
            times: timesArray
        })

        res.json(exerciseLog)
    })


//@desc  exerciseLog
//@route Get /api/exercises/log
//@access private

export const getExerciseLog = asyncHandler(async(res,req) => {
    const exerciseLog = await ExerciseLog.findById(req.params.id)
        .populate('exercise', 'name imageId')
        .lean()

    const prevExerciseLog = await ExerciseLog.find({
        user: req.user._id,
        exercise: exerciseLog._id
    }).sort('desc')

    const prevExLog = prevExerciseLog[0]

    let newTimes = reBuildTimes(exerciseLog)
    if(prevExLog) newTimes = reBuildTimes(exerciseLog, prevExLog)

    res.json({
        ...exerciseLog,
        times: newTimes
    })
})