import React, { useState } from 'react'
import Usestack1 from './Usestack1'

function Usestake() {

const [world, setworld] = React.useState("Eat")

function handleClick (){
    setworld ("Drink")
}

  return (
    <>
       <Usestack1 message = {world + " with lemon"} />

       <button onClick={handleClick}>Click here</button>

    </>
  );
}

export default Usestake