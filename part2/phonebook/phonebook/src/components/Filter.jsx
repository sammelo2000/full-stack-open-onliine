import React from 'react'

const Filter = (props) => {
    console.log(props)
    const {fillteredName,handleFilterContact} = props
  return (
    <div>
        <>Search Contact:<input
        value={fillteredName}
        onChange={handleFilterContact}
       /></>
    </div>
  )
}

export default Filter