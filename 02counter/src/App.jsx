import { useState } from 'react'
import './App.css'

function App() {
                //default value
let [Counter,setcounter] = useState(15)
  // let Counter =15;
const addvalue=()=>{
  console.log("clicked",Counter);
  if(Counter<20){
    Counter = Counter + 1;
    setcounter(prevCounter => prevCounter +1)
    setcounter(prevCounter => prevCounter +1)
    setcounter(prevCounter => prevCounter +1)
    setcounter(prevCounter => prevCounter +1)
  }
  else{
    setcounter("Out of Reach")
    
  }

}
const removeValue =()=>{
  console.log("Clicked" , Counter);
  if(Counter>0){
    setcounter(Counter - 1)
  }  else{
    setcounter("Out of Reach")
    setcounter(0)
  }
 
}

  return (
    <>
     <h1> First React Project </h1>
     <h2> Counter Value {Counter}</h2>
   

     <button onClick={addvalue}>ADD Value{Counter}</button>
    
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
