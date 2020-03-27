import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://localhost:3333'
})

export const headers = {
	headers:{
		Authorization: localStorage.getItem('ongID')
	}
}