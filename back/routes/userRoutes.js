import express from 'express'
import {getUserProfile} from "../controllers/user/profileControllers.js";
import {registerUser} from "../controllers/user/regControllers.js";
import {protect} from "../middleware/authMiddleware.js";
import {authUser} from "../controllers/user/authControllers.js";
const router = express.Router()

router.route('/profile').get(protect, getUserProfile)
router.route('/').post(registerUser)
router.route('/login').post(authUser)




export default router;