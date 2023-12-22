
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
      <Part part={props.contentArr[0].name} exer={props.contentArr[0].exercises}/>
      <Part part={props.contentArr[1].name} exer={props.contentArr[1].exercises}/>     
      <Part part={props.contentArr[2].name} exer={props.contentArr[2].exercises}/>                              
      
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
      <>
         <p>Number of exercises {props.exerArr[0].exercises + props.exerArr[1].exercises + props.exerArr[2].exercises}</p>
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
  const course = 'Half Stack application development'
  const parts = [
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


  return (
    <div>
      <Header title = {course} />
      <Content contentArr = {parts}  />
      <Total exerArr = {parts} />

    </div>
  )
}



export default App
