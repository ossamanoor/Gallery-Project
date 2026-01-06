import React, {useState} from 'react'

const App = () => {

const [num, setfirst] = useState(10)

const btnClicked=()=>{
setfirst(prev=>(prev+1))
setfirst(prev=>(prev+1))
setfirst(prev=>(prev+1))
}


  return (
   <div>
    <h1>{num}</h1>
    <button onClick={btnClicked}>Click Me</button>
   </div>
  )
}

export default App

