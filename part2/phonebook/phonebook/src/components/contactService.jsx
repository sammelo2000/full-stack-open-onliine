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

const updateNumber = (contact) => {
  const request = axios.put(`${baseUrl}/${contact.id}`,contact)
  return request

}

export default {
  getAll,
  create,
  deleteContact,
  updateNumber
}