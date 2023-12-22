
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
  return (
      <>
         <p>Number of exercises {props.exerArr[0] + props.exerArr[1] + props.exerArr[2]}</p>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header title = {course} />
      <Content contentArr = {[part1,part2,part3]}  />
      <Total exerArr = {[part1.exercises,part2.exercises,part3.exercises]} />

    </div>
  )
}



export default App
