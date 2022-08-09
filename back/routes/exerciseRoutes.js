import express from 'express'
import {protect} from "../middleware/authMiddleware.js";
import {addNewExercise} from "../controllers/exercise/exerciseControllers.js";
import {createNewExercise, getExerciseLog} from "../controllers/exercise/log/logControllers.js";


const router = express.Router()

router.route('/').post(protect, addNewExercise)
router.route('/log').post(protect, createNewExercise)
router.route('/log/:id').get(protect, getExerciseLog)

export default router;