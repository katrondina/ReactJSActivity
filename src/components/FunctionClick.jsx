import React from 'react';

const FunctionClick = (props) => {
    console.log("FunctionClick.const");
    const executeClick = () => {
        console.log("Hello");
    }
    return  (
    <button onClick={executeClick}>Click</button>
    );
}

export default FunctionClick;