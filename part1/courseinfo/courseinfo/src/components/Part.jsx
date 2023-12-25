
const Part = (props) => {

    console.log("Part prop",props)
    const {name, exercises} = props
    return (
      <>
        <li>{name} {exercises}</li>
      </>
      
    )
}

export default Part