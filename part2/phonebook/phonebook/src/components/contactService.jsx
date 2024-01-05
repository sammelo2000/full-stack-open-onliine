import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
   
  const request = axios.get(baseUrl)
  return request
  
                    
}

const create = () => {
    axios
    .post(baseUrl,newContact)
    .then(response => {
      const newContacts = persons.concat(response.data)
      console.log('New Contacts list',newContacts)
      setPersons(newContacts)
      setNewName('')
      setNewNumber('')

      console.log('Contact Added')
      console.log(newContacts)
    })
    .catch(error => {
      console.log(error)
    })
}

export default {getAll,create}