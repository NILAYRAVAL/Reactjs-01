// import React from 'react'



// function handleClick(){
//     Darkmode = !Darkmode;


// if (Darkmode == true) {

//     console.log("Dark mode is On");
    
// }
//  else{
//     console.log("Light mode is on");
//  }

// }

// function Darkmode() {
//   return (
//     <>
//     <button onClick = {handleClick} >  Click Me !!</button>

//                       </>
//     )
// }
import React from 'react'

function Darkmode(props) {
  return (

    <div>
        <h1>{props.message}</h1>
        
    </div>
  )
}

// export default Darkmode

export default Darkmode