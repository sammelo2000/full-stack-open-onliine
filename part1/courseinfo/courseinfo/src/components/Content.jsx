import Part from "./Part"
const Content = (props) => {
    console.log("Contents prop",props)
    const {contents} = props
    return (
      <>
        <ul>
          {contents.map((content) =>
            <Part key={content.id} name= {content.name} exercises= {content.exercises}/>
          )}
        </ul>
        
      </>
    )
  }

export default Content