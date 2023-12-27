

const ContactList = (props) => {
  const  {contact} = props
  return (
    <li>{contact.name} {contact.number}</li>
  )
}

export default ContactList
