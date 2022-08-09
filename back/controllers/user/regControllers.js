import User from '../../models/userModel.js'
import asyncHandler from 'express-async-handler'
import {generateToken} from "../../helpers/generateToken.js";

//@desc register User
//@route POST api/users
//@access public


export const registerUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body

    const isHaveUser = await User.findOne({email})

    if (isHaveUser) {
        res.status(400)
        throw new Error('That user have been register')
    }

    const user = await User.create(
        {
            email, password
        }
    )

    const token = generateToken(user._id)

    res.json({user, token})
})