import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
    {
        name: String,
        password: {
            type: String,
            required: true
        },
        email: {
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

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
    //если пароль  не поменяли
    if (!this.isModified('password')) {
        next()
    }
    // если поменяли то шифруем, хэшиуем и записываем в this.password
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)


export default User
