import axios from "axios";

const allApi = axios.create({
	baseURL : 'http://localhost:8000'
})

export const showPatientNew = ()=> allApi.get('test/showPatientNew')

export const createPatient = (body) => allApi.post('test/createPatient', body)

export const updateFlag = (body) => allApi.put('test/updateFlagPatient', body)