import React from 'react';

export class ClassFunctionClick extends React.Component{

    constructor(props){
        console.log("ClassFunctionClick.constructor");
        super(props);

        // list of bounded event handler
        this.executeClick = this.executeClick.bind(this);

        this.state = {
            message: 'Hello'
        }
    }

    executeClick(props){
        console.log("ClassFunctionClick.executeClick");
       this.setState({message: 'Hi'}, () => console.log(this.state.message));
    };

    render() {
        return <div>
            {/* using this way, we are creating multiple instances everytime we render */}
            <button onClick={this.executeClick.bind(this)}>1Click class</button>

            {/* anonymous ES6 function bind, function is already bound to this variable ?*/}
            <button onClick={() => this.executeClick()}>2Click Class</button>

            {/* using this bounded in constructor event handler */}
            <button onClick={this.executeClick}>3Click Class</button>
            </div>
    }
}