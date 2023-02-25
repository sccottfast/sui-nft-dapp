import { TokenAddress } from '../types/types'
import axios, { Axios } from 'axios'
import { RecommendedDapp } from '../types/types'

const API = axios.create({
	baseURL: 'https://2qkqa80i.directus.app/items/Dapps',
	headers: {
		Authorization: 'Bearer AXMphM7jf_9pQb-ESy0VHFGywigFnnTt'
	}
})

export const getDapp = async () => {
	try {
		const res = await API.get('')
		console.log(res)

		return res.data
	} catch (e) {
		return e
	}
}
