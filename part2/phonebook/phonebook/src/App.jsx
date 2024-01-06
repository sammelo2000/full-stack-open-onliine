import { useState, useEffect } from "react"

import ContactList from "./components/ContactList"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import contactService from "./components/contactService"
import Notification from "./components/Notification"



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [fillteredName,setFillteredName] = useState('')
  const [fillteredResult,setFillteredResult] = useState([])
  const [alertMessage,setAlertMessage] = useState(null)


  
  

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
      if(contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
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
        
      }
  
      console.log('new name',newName)
      console.log('New contact',newContact)
      
      contactService
      .create(newContact)
      .then(res => {
        setPersons(persons.concat(res.data))
      })

      setAlertMessage(`${newName} has been added to contacts`)
       setTimeout(() => {
        setAlertMessage(null)
       },4000)

      setNewName('')
      setNewNumber('')
      

     
     
      
    }else{
      const confirmed  = confirm(`${newName} is already added to the note book,  replace number with new one`)
      if(confirmed) {
        const toUpdate = persons.filter((person) => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase() )
        console.log('ToUpdate', toUpdate)

        const [toUpdateperson] = toUpdate
        console.log('ToUpdate a Person',toUpdateperson)
        
        const updated = {...toUpdateperson,number:newNumber}

        console.log('Updated Person',updated)
        contactService
        .updateNumber(updated)
        .then((res) => {
          console.log('Updated response',res.data)
          console.log('Og person list',persons)
          
          const oldContactFilltered = persons.filter(p => p.id !== res.data.id)
          console.log('oldConTactFilltered',oldContactFilltered)
          const updatedContactList = oldContactFilltered.concat(res.data)
          console.log('New contact list',updatedContactList)
          setPersons(updatedContactList)
          setNewName('')
          setNewNumber('')
          setAlertMessage(`${res.data.name} number has been updated to ${res.data.number}`)
          setTimeout(() => {
            setAlertMessage(null)
          },4000)
          //Fix this when up . just have to find and replace
        })
      }

    }
   
    

  }
  useEffect(() => {
    const promise = contactService.getAll()
    promise.then((res) => {
      setPersons(res.data)
    })
    
  },[])

  const removeContact = (contact) => {
    if(confirm(`Delete ${contact.name}`) ) {
    contactService
    .deleteContact(contact.id)
    .then((res) => {
      console.log('removeContact response data',res.data)
      const refresh = persons.filter(person=> person.id !== contact.id)
      setPersons(refresh)
      console.log('deletd succesful')
    })
    } 
    
  }


  

  return (
    <div>
      <Notification message={alertMessage} />
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