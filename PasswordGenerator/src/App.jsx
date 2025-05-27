import { useState, useCallback, useEffect, useRef } from 'react'
// Components often need to change what’s on the screen as a result of an interaction. (useState)


function App() {
  //initial state and set function 
  const [length, setLength] = useState(6)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("") 


  //useRef hook (for copy button)
  //To create a link between copy button and password,just selection
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*"

    //generating the random number
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1 )
      pass += str.charAt(char)
    }

    setPassword(pass)
    

  }, [length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    //we have used useRef only for the highlight part written below
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(password) //copying the password
  },
  [password])

  //useEffect is called everytime the page is loaded and also if any change
  //is done in dependencies i.e length,numberAllowed etc
  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])
 
  return (
    <>
    <div className='w-full h-auto max-w-md mx-auto shadow-md rounded-lg px-4 my-8
     bg-gray-700 text-orange-500'>
      <h1 className="text-white text-center"> Password Generator </h1>
      <div className='flex shadow rounded-lg mt-2 overflow-hidden mb-4'>
        <input
          type = "text"
          value = {password}
          className = "outline-nonew-full w-full  py-1 px-3  bg-white"
          placeholder='Password'
          readOnly
          ref = {passwordRef}
          />
          <button 
          onClick = {copyPasswordToClipboard}
          className=" bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy </button>
      </div>
      <div className = "flex text-sm gap-x-2 ">
        <div className = "flex items-center gap-x-1 mb-4 ">
          <input 
          type = "range"
          min= {6}
          max= {100}
          value = {length}
          className = "cursor-pointer"
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label> Length: {length} </label>
        </div>
        <div className = "flex items-center gap-x-1 mb-4">
          <input 
          type = "checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange = {() => {
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor = "numberInput">Numbers</label>
        </div>
        <div className = "flex items-center gap-x-1 mb-4">
          <input 
          type = "checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange = {() => {
            setCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor = "characterInput">Characters</label>
        </div>


      </div>
    </div> 
    </>
  )
}

export default App
