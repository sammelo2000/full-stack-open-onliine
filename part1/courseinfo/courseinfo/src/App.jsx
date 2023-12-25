


const Course = (props) => {
  console.log("course prop",props)
  const {course} = props
  const {id,name,parts} = course
  return (
    <div>
       <Header title = {name} />
       <Content contents = {parts}  />
       {/* <Total exer = {course} />
       */}
      </div>
  )
}

const Header = ({title}) => {
  console.log(title)
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

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

// const Total = (props) => {
//   console.log(props)
//   return (
//       <>
      
//       </>
//   )

// }

const Part = (props) => {

  console.log("Part prop",props)
  const {name, exercises} = props
  return (
    <>
      <li>{name} {exercises}</li>
    </>
    
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      
    ]
  }

  return <Course course={course} />
}


export default App
