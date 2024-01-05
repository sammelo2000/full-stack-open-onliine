import { useState, useEffect } from "react"

import ContactList from "./components/ContactList"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import contactService from "./components/contactService"


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [fillteredName,setFillteredName] = useState('')
  const [fillteredResult,setFillteredResult] = useState([])

  
  

  const handleFilterContact = (e) => {
      console.log('handleFilter',e.target)
      console.log('Target Value:', e.target.value)
      const findName = e.target.value
      setFillteredName(e.target.value)
      const fillteredNames = persons.filter(person =>
      person.name.toLocaleLowerCase() === findName.toLocaleLowerCase() )
      console.log('Filltered Result ', fillteredNames)
      setFillteredResult(fillteredNames)
  } 


  const handleNameChange = (e) => {
    console.log('handleNewName',e.target)
    setNewName(e.target.value)
    
  }

  const handleNumberChange = (e) => {
    console.log('handleNumberChang',e.target)
    setNewNumber(e.target.value)
  }

  const checkExsitingName = (name) => {
    for(let contact of persons) {
      if(contact.name === name) {
        return false
      }
    }
    return true
  }
 
  const  handleAddContact = (e) => {

    e.preventDefault()
    if(checkExsitingName(newName)) {
      console.log('addContact target and value',e.target,)
      const newContact = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
  
      console.log('new name',newName)
      console.log('New contact',newContact)
      
      contactService
      .create(newContact)
      .then(res => {
        setPersons(persons.concat(res.data))
      })


      setNewName('')
      setNewNumber('')
      

     
     
      
    }else{
      alert(`${newName} already exist as a contact`)
    }
   
    

  }
  useEffect(() => {
    const promise = contactService.getAll()
    promise.then((res) => {
      setPersons(res.data)
    })
    
  },[])

  const removeContact = (id) => {
    contactService
    .deleteContact(id)
    .then((res) => {
      console.log('removeContact response data',res.data)
      const refresh = persons.filter(person=> person.id !== id)
      setPersons(refresh)
      console.log('deletd succesful')
    })
  }


  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
      fillteredName={fillteredName} 
      handleFilterContact={handleFilterContact}/>
       
      <h2>add a new contact</h2>
        <PersonForm
        handleAddContact={handleAddContact}
        newName={newName} 
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <Persons 
        persons={persons}
        fillteredName={fillteredName}
        fillteredResult={fillteredResult}
        removeContact= {removeContact}
      />
      
    
    </div>
  )
}
export default App