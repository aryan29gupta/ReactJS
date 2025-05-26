import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Aryan",
    age: "18"
  }
  return (
    <>
    <h1 className = 'text-red-500 bg-green-500 p-4 rounded-4xl mb-2' > This is Tailwind Setup </h1>
    <Card username = "Aryan" Object = {myObj} />
    </>
  )
}

export default App
