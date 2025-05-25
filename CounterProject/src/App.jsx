import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //for updating the value of counter in the UI 
  //setCounter name can be written by any name 
  let [counter, setCounter] = useState(5)
 
  //let counter = 5;
  const addValue = () => {
    //counter = counter + 1
    if (counter <20){
    setCounter(counter + 1)
    console.log("Value added", counter + 1)
    }
  }
    
  const removeValue = () => {
    if (counter > 0){
    setCounter(counter - 1)
    console.log("Value Removed",counter - 1);
    }
    
  }

  return (
    <>
     <h1>React</h1>
     <h2>Counter Value: {counter}</h2>
     <br/>
     <button onClick = {addValue}> Add Value </button>
     <br/>
     <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
