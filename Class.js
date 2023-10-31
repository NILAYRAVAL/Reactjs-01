import React from 'react'
import { Component } from 'react'

// function Class() {
//   return (
//     <>
//     <h3> Class</h3>
//     </>
//   )
// }


class Class extends React.Component {
    render(){
        
        return (
            <>
                <h3>Hello {this.props.name}</h3>
                <p>Let's Learn about Class components</p>
            </>
        );
    };
}

export default Class
