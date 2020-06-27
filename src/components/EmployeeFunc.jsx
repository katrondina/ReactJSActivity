import React from 'react';

// i think this is an example of stateless/dump/presentational component?
export function Employee(props){
    console.log("employeefunc");
return <h1>Hello {props.name + ' ' + props.lastname} !</h1>
}