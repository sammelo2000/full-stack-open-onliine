import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = (props) => {
    console.log("course props",props)
    const {course} = props
    const {name,parts} = course
    return (
      <div>
         <Header title = {name} />
         <Content contents = {parts}  />
         <Total exercises = {parts} />
        
        </div>
    )
  }

export default Course