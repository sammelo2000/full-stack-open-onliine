import React from 'react'
import ContactList from './ContactList'

const Persons = (props) => {
    console.log(props)

    const {
        fillteredName,
        persons,
        fillteredResult,
        removeContact
    } = props
    console.log('This is persons',persons)
  return (
    <div>
        <ul>
        {
          (fillteredName === '') ?  persons.map(person =>
            <ContactList key={person.id} contact={person} removeContact={removeContact} />
            ) :
             fillteredResult.map(person => 
              <ContactList key={person.id} contact={person}  removeContact = {removeContact} />
              )
        }
      </ul>
    </div>
  )
}

export default Persons