import { useState } from 'react'

 const Button = ({handleEvent,text}) => {
  return (
    <div>
      <button onClick={handleEvent}>{text}</button>
    </div>
  )
}



const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(new Array(8).fill(0))
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
 
  console.log(selected)

  const handleSelected = () => {
    const randomNumber = Math.floor(Math.random() * 8) 
    setSelected(randomNumber)
  
  }

  const handleVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
    console.log("Handle vote", selected,votesCopy[selected])
  }

  const findMostVotes = () => {
    let tempMax = votes[0]
    for (let index = 1; index < votes.length; index++) {
      if(tempMax < votes[index]) {
        tempMax = votes[index]
      }
    }
    const mostVoteAnecdote = {
      voteAmount : tempMax,
      anecdote : votes.indexOf(tempMax)
    }
    return mostVoteAnecdote
  }

  const mostVotes = findMostVotes()

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button  handleEvent= {handleSelected} text={"Next anecdotes"}/>
      <Button handleEvent={handleVote} text={"Vote"}/>
      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVotes.anecdote]}
      <p>has {mostVotes.voteAmount} votes</p>

    </div>
  )
}

export default App