import { useState } from "react"

const Button = (props) => <button onClick={props.onClick} >{props.text}</button>

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return <p>No feedback given</p>
  }
  return(
    <table>
      <tbody>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />  
        <StatisticLine text='bad' value={props.bad} /> 
        <StatisticLine text='all' value={props.all}/>
        <StatisticLine text='average' value={props.average.toFixed(2)} />
        <StatisticLine text='positive' value={props.positive.toFixed(1) + '%'} />
      </tbody>
    </table>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  

  const All = () => good + neutral + bad
    
  const Average = () => {
    if (All() === 0) {
      return 0
    }
    return (good*1 + neutral*0 + bad*(-1))/All()
  }

  const Positive = () => {
    if (All() === 0) {
      return 0
    }
    return (good/All())*100
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={All()} average={Average()} positive={Positive()} />
    </div>
  )
}


export default App