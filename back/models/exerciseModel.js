import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const exerciseSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        times: {
            type: Number,
            required: true
        },
        imageId: {
            type: String,
            required: true
        }
    },
    {
        //позволяет при false получить все поля в module user, даже пустые обьекты
        minimize: false,
        timestamps: true
    }
)

const Exercise = mongoose.model('Exercise', exerciseSchema)


export default Exercise
