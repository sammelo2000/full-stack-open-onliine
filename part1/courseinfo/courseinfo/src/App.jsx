
const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.partArr[0]} exer={props.exerArr[0]}/>
      <Part part={props.partArr[1]} exer={props.exerArr[1]}/>     
      <Part part={props.partArr[2]} exer={props.exerArr[2]}/>                              
      
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title = {course} />
      <Content partArr = {[part1,part2,part3]} exerArr = {[exercises1,exercises2,exercises3]} />
      <Total exerArr = {[exercises1,exercises2,exercises3]} />

    </div>
  )
}



export default App
