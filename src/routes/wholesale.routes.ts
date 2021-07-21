import { Router } from 'express'
import api from '../utils/api'
import AppError from '../errors/AppError'

const wholesaleRoutes = Router()

wholesaleRoutes.post('/register', async (request, response) => {
	const { companyData, addressData } = request.body

	try {
		await api.put('dataentities/CL/documents', {
			...companyData,
			isCorporate: true
		})
		await api.post('dataentities/AD/documents', {
			...addressData,
			userId: companyData.email,
			addressName: companyData.tradeName
		})
		return response.json({ message: 'ok' })
	} catch (error) {
		console.log(error)
		if (error.message === 'Request failed with status code 304')
			throw new AppError('User already registered.')
		throw new AppError(`Error in VTEX API: ${error.message}`, 401)
	}
})

wholesaleRoutes.get('/auth/:email', async (request, response) => {
	const url = `dataentities/CL/search?_where=email=${request.params.email}&_fields=approved`

	try {
		const apiResponse = await api.get(url)
		response.status(200).json(apiResponse.data[0])
	} catch (error) {
		console.log(error)
		if (error.message === 'Request failed with status code 304')
			throw new AppError('User already registered.')
		throw new AppError(`Error in VTEX API: ${error.message}`, 401)
	}
})

export default wholesaleRoutes
