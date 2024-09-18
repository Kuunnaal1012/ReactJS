/* eslint-disable no-unused-vars */
import { useState ,useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {

  const [length, setLength] =useState(8)
  const [numberAllowed , setNumberallowed] =useState(false)
  const [CharAllowed, setCharAllowed] =useState(false)
  const[password,setpasword] = useState("")

  const passwordRef = useRef(null)
  
  const passwordGenrator =useCallback(()=>{
    let password = ""
    let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQSRTUVWXYZ"
    if (numberAllowed) str += "0123456789"
    if(CharAllowed) str += "!@#$%^&*()_-+=?/{}[]~"
   
    for (let i = 1; i <=length; i++) {
      
      let char =Math.floor(Math.random()*str.length+1)
      password +=str.charAt(char)
    }
    setpasword(password)
  }, [length, numberAllowed,CharAllowed,setpasword])



  useEffect(()=>{
    passwordGenrator()
  }, [length ,numberAllowed ,CharAllowed, passwordGenrator])

const copyPasswordToClibboard =useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,99)
  window.navigator.clipboard.writeText(password)
 

},[password] )
  return (
    <>
     <h1 className=' text-center text-white text-3xl py-2'>Project-105</h1>
    <div className='w-full  max-w-md mx-auto shadow-md rounded-lg px-5 py-4 my-8 text-orange-500 bg-zinc-800'
    ><h1 className='text-white text-center my-3'>Password Genrator</h1>
     <div className='flex-shadow rounded-lg overflow-hidden mb-4 text-orange-400'>
      <input
            type="text"
            value={password}
            className="outline-none w-80 py-1 px-3"
            placeholder="Password"
            readOnly 
            ref={passwordRef}
            ></input>
        <button onClick={copyPasswordToClibboard} 
        className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
        >copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input
      type='range' min={6} max={30}
      value={length}
      className='cursor-pointer'
      onChange={(e)=> {setLength(e.target.value)}}
      ></input>
       <label >Length: {length}</label>

      </div>

      <div className='flex items-center gap-x-1'>
      <input type='checkbox' 
      onChange={()=>{
        setNumberallowed((prev)=>!prev);
      }}
      
      ></input>
      <label> Numbers</label>
     </div>
     <div className='flex items-center gap-x-1'>
      <input type='checkbox' 
      onChange={()=>{
        setCharAllowed((prev)=>!prev);
      }}
      
      ></input>
      <label >Charcters</label>
     </div>
      </div>
    </div>
     
    </>
  )
}

export default App
