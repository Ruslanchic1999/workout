import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const {ObjectId} = mongoose.Schema
const workoutLogSchema = mongoose.Schema(
    {
        user: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        workout: {
            type: ObjectId,
            ref: "Workout",
            required: true
        },
        completed: {
            type: Boolean,
            required: true
        }
    },
    {
        //позволяет при false получить все поля в module user, даже пустые обьекты
        minimize: false,
        timestamps: true
    }
)

const WorkoutLog = mongoose.model('WorkoutLog', workoutLogSchema)


export default WorkoutLog
