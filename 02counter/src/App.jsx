import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter] =useState(15) // counter variable hai and set setCounter function hai


  //let counter =15;

  const addValue = ()=>{
    console.log("clicked",counter);
    
   // console.log("value added",Math.random());
   //counter = counter +1;
   setCounter(prevCounter=>prevCounter + 1)//prevcounter ke under previous value aati hain
   setCounter(prevCounter=>prevCounter + 1)
   setCounter(prevCounter=>prevCounter + 1)
   setCounter(prevCounter=>prevCounter + 1)
    
  }

  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
     
      <h1>Chai or react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value:{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove value:{counter}   </button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
