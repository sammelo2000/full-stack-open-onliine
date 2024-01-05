import contactService from "./contactService"

const ContactList = (props) => {
  console.log('Contact List props',props)
  
  const  {contact,removeContact} = props

  return (
    <li>{contact.name} {contact.number} <button onClick={() => removeContact(contact) }>delete</button></li>
  )
}

export default ContactList
