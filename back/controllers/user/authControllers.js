import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import {generateToken} from "../../helpers/generateToken.js";

//@desc register User
//@route POST api/users
//@access public

export const authUser = asyncHandler(
    async (req, res) => {
        const {email, password} = req.body

        const user = await User.findOne({email})

        if (user && (await user.matchPassword(password))) {
            const token = generateToken(user._id)

            res.json( {user, token})
        } else {
            res.status(401)
            throw new Error('invalidate email or password')
        }

    })