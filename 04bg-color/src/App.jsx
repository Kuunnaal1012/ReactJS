import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
     <div className=" w-full h-screen duration 200" style={{backgroundColor: color}} >
       <div className='fixed flex flex-wrap  bottom-12 px-3 py-2 rounded-3xl justify-center' 
       >
       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'
        >
        <button onClick={()=> setcolor("red")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{backgroundColor:"red"}}
        >Red</button>
        
        
        <button onClick={()=> setcolor("green")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{backgroundColor:"green"}}
        >Green</button>
        
        
        <button onClick={()=> setcolor("blue")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{backgroundColor:"Blue"}}
        >Blue</button>

        <button onClick={()=> setcolor("grey")}
        className='outline-none px-4 py-1 rounded-full text-white-200
         shadow-lg' 
        style={{backgroundColor:"grey"}}
        >Grey</button>

        <button onClick={()=> setcolor("purple")}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
        style={{backgroundColor:"purple"}}
        >Purple</button>

       </div>

       </div>
     </div>
    </>
  )
}

export default App
