import React from 'react'
import ContactList from './ContactList'

const Persons = (props) => {
    console.log(props)
    const {
        fillteredName,
        persons,
        fillteredResult
    } = props
  return (
    <div>
        <ul>
        {
          (fillteredName === '') ?  persons.map(person =>
            <ContactList key={person.id} contact={person} />
            ) :
             fillteredResult.map(person => 
              <ContactList key={person.id} contact={person} />
              )
        }
      </ul>
    </div>
  )
}

export default Persons