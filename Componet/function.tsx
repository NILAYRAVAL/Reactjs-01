import React from 'react'
import Darkmode from './Darkmode';



// const Function = () => {
//   const handlechange = () => {
//       console.log("first");
//   }
  
  const Function = () => {

    const handlechange2 = () => {
        console.log("first");
    }


     const date = new Date()

  return (
   <>
          
    <h1>Hello</h1>
    {/* <button onClick={handlechange}>Add </button> */}

    <button onMouseOver={handlechange2}>Add 2 </button>

    <input type="date" name="date" id="connect" />



    
    <Darkmode message = {date.toLocaleTimeString()}/>
    
    </>
  )
}

export default Function