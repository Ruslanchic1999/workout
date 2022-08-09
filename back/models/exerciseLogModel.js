import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const {ObjectId} = mongoose.Schema
const exerciseLogSchema = mongoose.Schema(
    {
        workout: {
            type: ObjectId,
            ref: "Workout",
            required: true
        },
        times: [{
            weight: {type: Number, required: true},
            repeat: {type: Number, required: true},
            completed : {type: Boolean, required: true}
        }],
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

const ExerciseLog = mongoose.model('ExerciseLog', exerciseLogSchema)


export default ExerciseLog
