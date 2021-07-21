import { Router } from 'express'
import api from '../utils/api'
import wholesaleRoutes from './wholesale.routes'

const routes = Router()

routes.use('/', wholesaleRoutes)

routes.get('/test', async (request, response) => {
	const res = await api.get('dataentities/CL/search')
	return response.json(res.data)
})

export default routes
