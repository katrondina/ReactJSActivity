import React from 'react';

export class Unauthorized extends React.Component {

    componentWillUnmount(){
        alert("Unmount Unauthorized");
    }

    render(){
        return (<div>
            Goodbye from unauthorized.
        </div>);
    }
}