import React from 'react';

export function Subject(props){
    console.log('Subject');
    return <div>
        {props.studentList.map( students => <div>
            name: {students.name}
            </div>)}
    </div>
}