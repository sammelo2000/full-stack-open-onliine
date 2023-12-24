


const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.content.parts[0].name} exer={props.content.parts[0].exercises}/>
      <Part part={props.content.parts[1].name} exer={props.content.parts[1].exercises}/>     
      <Part part={props.content.parts[2].name} exer={props.content.parts[2].exercises}/>                              
      
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
      <>
         <p>Number of exercises {props.exer.parts[0].exercises + props.exer.parts[1].exercises + props.exer.parts[2].exercises}</p>
      </>
  )

}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.part} {props.exer} 
      </p>
    </>
    
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  return (
    <div>
      <Header title = {course.name} />
      <Content content = {course}  />
      <Total exer = {course} />
      

    </div>
  )
}



export default App
