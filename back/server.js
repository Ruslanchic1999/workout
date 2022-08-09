import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'

//can see variable in all project
dotenv.config()
//get and connect db
import {connectDb} from '../back/config/db.js'
connectDb().then()
//get routes
import userRoutes from '../back/routes/userRoutes.js'
import exerciseRoutes from '../back/routes/exerciseRoutes.js'
import workoutRoutes from '../back/routes/workoutRoutes.js'

//get middleware
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";

const app = express()
if(process.env.NODE_ENV === 'development')
    app.use(morgan('dev'))

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/exercises', exerciseRoutes)
app.use('/api/workouts', workoutRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen (
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} node on port ${PORT}`)
)
