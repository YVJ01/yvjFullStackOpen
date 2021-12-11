import React, { useState} from 'react'

 const Header = () => (
     <div>
       <h1>give feedback</h1>
     </div>
   )

const Button = ({onClick,text}) =>(
    <button onClick={onClick}>{text}</button>
  )

 const Statistics = ({clicks}) => {
     const average = (clicks.good + clicks.bad*-1 )/clicks.all
     const positive  = clicks.good*(100/clicks.all) 

     if(clicks.all == 0)
       return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
     )
    else
     return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
        <StatisticLine text="good" value ={clicks.good} />
        <StatisticLine text="neutral" value ={clicks.neutral} />
        <StatisticLine text="bad" value ={clicks.bad} />
        <StatisticLine text="all" value ={clicks.all} />
        <StatisticLine text="average" value ={average} />
        <StatisticLine text="positive" value ={positive} />
        </tbody>
        </table>    
    </div>
     )
   }

const StatisticLine = ({text,value}) => {
  if(text=="positive")
  return(
    <tr><td>{text}</td><td>{value} %</td></tr>
  )
 else 
 return(
   <tr><td>{text}</td><td>{value}</td></tr>
 )
}


const App= () => {
   const [clicks, setClicks] = useState({
    good: 0, bad: 0, neutral: 0, all: 0
  })
  const handleGoodClick = () =>
      setClicks({
        ...clicks,
      all: clicks.all+1,
      good:clicks.good+1
      })
  const handleBadClick = () =>setClicks({
      ...clicks,
     all: clicks.all+1,
      bad:clicks.bad+1
    })
  const handleNeutralClick = () =>setClicks({
      ...clicks,
    all: clicks.all+1,
      neutral:clicks.neutral+1
    })

  return (
    <div>
     <Header/>
     <Button onClick={handleGoodClick} text='good'/>
     <Button onClick={handleNeutralClick} text='neutral'/>
     <Button onClick={handleBadClick} text='bad'/>
     <Statistics clicks={clicks}/>
    </div>
  )
}

export default App;
