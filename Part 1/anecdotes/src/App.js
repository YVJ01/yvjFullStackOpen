import React, { useState } from 'react'

const Heading = ({text}) => <h2>{text}</h2>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes,setVote] = useState(Array(anecdotes.length).fill(0))
  const Anecdote = ({text,value}) =><div><p>{text}</p> <p>has {value} votes</p></div>

  const MaxVote = () => {
    const maxVal = Math.max(...votes)
    const indexVal = votes.indexOf(maxVal)
    const res = anecdotes[indexVal]

    return (
        <Anecdote text={res} value={votes[indexVal]}/> )
    }
  const addVote = () => {
     const newVote = [...votes]
     newVote[selected]+=1
     setVote(newVote)
  }
  const randomAnec = () => {
    const val = Math.floor(Math.random()*anecdotes.length)
    setSelected(val)
  }

  const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

  return (
    <div>
      <Heading text="Anectode of the day" />
      <Anecdote text={anecdotes[selected]} value={votes[selected]} />
      <div>
      <Button onClick={addVote} text="vote" />  
      <Button onClick={randomAnec} text="next anecdote" />
      </div>
      <Heading text="Anecdote with most votes" />
      <MaxVote />
    </div>
  )
}

export default App
