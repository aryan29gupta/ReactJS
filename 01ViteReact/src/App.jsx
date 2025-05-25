import New from "./Function"
//function name should start with CAPS in both Vite and React
function App() {
  const number = "This is number 1"

  return (
    //only one element can be returned and not any other <p> or <h1>
    //Hence we use <> This is called fragment 
      <>
      <New/>
      <h1>This is the use of fragment and {number}</h1>
      </>
      
  )
}

export default App
