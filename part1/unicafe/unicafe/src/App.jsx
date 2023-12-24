import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalFeedBack,setTotalFeedBack] = useState(0)
  const [avgFeed, setAvgFeed] = useState(0)


  let  positivePercent = ((good/totalFeedBack) * 100) 
  positivePercent = (positivePercent)?  positivePercent : '...'

  
  
  const calAvgFeedBack = (good,bad,total) => {
    let goodScore = good * 1
    let badScore = bad * -1
    
    console.log('scores',goodScore,badScore)

    let avgFeedBack = (goodScore + badScore) / total
    console.log('avg',avgFeedBack,'total',total)
    
    return avgFeedBack
     
  }
  const handleSetGood = () => {
    const updatedGood = good + 1
    
    const updatedTotalFeedBack = updatedGood + bad + neutral
    console.log("updatedGood:",updatedGood,"updatedTotalFeedback",updatedTotalFeedBack)
    setGood(updatedGood)
    setTotalFeedBack(updatedTotalFeedBack)
    
    
    
    
    setAvgFeed(calAvgFeedBack(updatedGood,bad,updatedTotalFeedBack))
    
   
    
  } 

  const handleSetBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedTotalFeedBack = updatedBad + good + neutral
    setTotalFeedBack(updatedTotalFeedBack)
    console.log(updatedBad)
    setAvgFeed(calAvgFeedBack(good,updatedBad,updatedTotalFeedBack))
  }

  const handleSetNuetral = () => {
    const updatedNuetral = neutral + 1
    setNeutral(updatedNuetral)
    const updatedTotalFeedBack = updatedNuetral + good + bad
    setTotalFeedBack(updatedTotalFeedBack)
    console.log(updatedNuetral)
    setAvgFeed(calAvgFeedBack(good,bad,updatedTotalFeedBack))
  }

  

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleSetGood}>good</button>
      <button onClick={handleSetNuetral}>neutral</button>
      <button onClick={handleSetBad}>bad</button>

      <h2>statistics</h2>
      <p>good: {good} </p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad} </p>
      <p>Total: {totalFeedBack}</p>
      <p>Average: {avgFeed}</p>
      <p>Postive Feedback: {positivePercent}%</p>
    </div>
  )
}

export default App