import axios from 'axios'

//TODO: Move to .env
let axiosInstance = axios.create({ baseURL: 'http://localhost:8000' })

export const httpClient = axiosInstance
