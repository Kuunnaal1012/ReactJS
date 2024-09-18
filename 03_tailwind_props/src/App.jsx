import './App.css'
import CardOne from './module/card'
import NavbarOne from './module/Navbar'
function App() {

  let myObject ={
    username: "Kunal",
    age: 21
  }


  return (
    <>
    <NavbarOne/>
    <h1 className='bg-neutral-700 text-white p-3 rounded-l mb-4 text-center' >Project Second</h1>
    <h3 className='bg-neutral-500 text-white p-3 rounded-l mb-4 text-center'>Tailwind and Props </h3>
    
     <CardOne channel ="Kunal Khandale" Btntext ="Click-Me"/>
     <CardOne channel ="Hitesh Choudhdary" text ="Click-Me" someobj ={myObject}/>
<p> configure tailwind props and default values of props</p>
    </>
  )
}

export default App
