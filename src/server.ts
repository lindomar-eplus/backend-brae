import dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import 'express-async-errors'
import AppError from './errors/AppError'

import routes from './routes'

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api', routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
	console.error(err)
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({
			status: 'error',
			message: err.message
		})
	}

	return response.status(500).json({
		status: 'error',
		message: 'Internal server error'
	})
})

app.listen(process.env.PORT || 3333, () => {
	console.log(`🚀 Server started on port ${process.env.PORT || 3333}!`)
})
