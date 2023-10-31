import React from 'react'

// function FunctionComponent ()  {
//   return (
//     <>
//     <h3> Function</h3>
//     </>
//   )
// }



let FunctionComponent = ({name}) => {
    return (
       <>
        <h3>Hello {name}</h3>
        <p>Let's Learn about Functional components</p>
       </>     
    );
};

export default FunctionComponent
