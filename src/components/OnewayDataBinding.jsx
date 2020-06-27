import React from 'react';

export class OnewayDataBinding extends React.Component{
    
    render(){
        console.log("OnewayDataBinding");
        return <div>
            <input type="text" value={this.props.message} onChange={this.props.handleOnChange}></input>
        </div>
    }
}