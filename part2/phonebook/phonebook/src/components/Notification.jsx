import React from 'react'


const notificationStyle = {
    color: 'green',
    fontStyle:'italic',
    fontSize: 16,
    borderStyle:'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    background:'lightgrey'

}

const Notification = (props) => {
    console.log(props)
    const {message} = props

    if(message === null) return null

  return (
    <div style={notificationStyle}>
        {message}

    </div>
  )
}

export default Notification