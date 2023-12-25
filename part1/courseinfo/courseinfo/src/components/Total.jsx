

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

export default Total