import Course from "./components/Course"
//Exercise 2.4 and 2.5
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

