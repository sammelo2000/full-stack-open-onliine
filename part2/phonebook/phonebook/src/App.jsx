import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handleNameChange = (e) => {
    console.log('handleNewName',e.target)
    setNewName(e.target.value)
    
  }
 
  const  handleAddContact = (e) => {
    e.preventDefault()
    console.log('addContact target',e.target)
    const newContact = {
      name: e.target.value
    }

    setPersons(persons.concat(newContact))
    setNewName('')

    console.log('Contact Added')

  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddContact}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        
        {persons.map(person => {
          <li key={person.name}>{person.name}</li>
        })}
      </ul>
    
    </div>
  )
}
export default App