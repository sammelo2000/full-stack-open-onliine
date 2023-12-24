import { useState } from 'react'



const StatisticLine = ({text,value}) => {
  return (
    <>
     <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
        
     </table>
    </>
  )
}

 const Statistics = ({states, positivePercent}) => { 
  const {good,neutral,bad,totalFeedBack,avgFeed} = states
  if(good > 0 | neutral > 0 | bad > 0 | totalFeedBack > 0 | avgFeed > 0) {
  return (
    <div>
        <StatisticLine text="good" value= {good} />
        <StatisticLine text="nuetral" value= {neutral} /> 
        <StatisticLine text="bad" value= {bad} /> 
        <StatisticLine text="all" value= {totalFeedBack} /> 
        <StatisticLine text="average" value= {avgFeed} />  
        <StatisticLine text="positive" value= {positivePercent + "%"} /> 
        
    </div>
  )
  }
  return (
    <>
      <p>No feedback given</p>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalFeedBack,setTotalFeedBack] = useState(0)
  const [avgFeed, setAvgFeed] = useState(0)

  const states = {
    good: good,
    neutral: neutral,
    bad: bad,
    totalFeedBack: totalFeedBack,
    avgFeed: avgFeed
  }


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
      <Statistics states = {states} positivePercent = {positivePercent} />

     
    </div>
  )
}

export default App