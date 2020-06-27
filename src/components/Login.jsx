import React from 'react';
//import { render } from '@testing-library/react';

export class Login extends React.Component{
    
    componentWillMount() {
        alert("Unmount Login");
    }

    render(){
        return <div>
            Hello from LOGIN.
        </div>
    }
    
}