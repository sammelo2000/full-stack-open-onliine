


const Course = (props) => {
  console.log("course props",props)
  const {course} = props
  const {id,name,parts} = course
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

const Total = (props) => {
  console.log(props)
  const {exercises} = props 

  const totalExercies = () => {
    let sum = 0
    for(let x of exercises) {
        sum += x.exercises
    }
    return sum
  }


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
      {
        name: 'Backend',
        exercises: 24,
        id: 4
      },
      {
        name: 'Comp 101',
        exercises: 140,
        id: 5
      }
      
    ]
  }



  
  return <Course course={course} />
}


export default App
