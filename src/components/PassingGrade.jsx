import React from 'react';

export function PassingGrade(props){
    console.log('PassingGrade');
    return <div>
      {
          props.studentList.map( students => <div>
            name: {students.name}
              <br />age: {students.age} 
        </div>)
      }
    </div>
}