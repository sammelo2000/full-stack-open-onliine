


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

const Header = ({title}) => {
  console.log(title)
  return (
    <>
      <h2>{title}</h2>
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

const Total = (props) => {
  console.log(props)
  const {exercises} = props 

  const totalExercies = () => exercises.reduce((sum,exercise) => sum+= exercise.exercises, 0)


  return (
      <>
        <p><b>Total Exercises</b> {totalExercies()}</p>
      </>
  )

}

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
 
 
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  
  return (
    <>
      <h1>Web development curriculum</h1>
      <ul>
        {courses.map(course => 
          <li key={course.id}>
            <Course course={course}/>    
          </li>

        )}
      </ul>
    </>
  )
}


export default App
