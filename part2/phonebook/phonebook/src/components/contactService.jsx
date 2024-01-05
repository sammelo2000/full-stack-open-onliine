import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
   
  const request = axios.get(baseUrl)
  return request
  
                    
}

const create = (newContact) => {
  const request = axios.post(baseUrl,newContact)
  return request
}

const deleteContact = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return  request
}

export default {getAll,create,deleteContact}