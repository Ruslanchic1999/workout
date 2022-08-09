import express from 'express'
import {protect} from "../middleware/authMiddleware.js";
import {getWorkout, workoutControllers} from "../controllers/workout/workoutControllers.js";

const router = express.Router()

router.route('/').post(protect, workoutControllers)
router.route('/:id').get(protect, getWorkout)

export default router;