import React from 'react';

export class Information extends React.Component{
    render(){
        console.log('Information.render');
        return <div>
           {this.props.studentList.map( (students) => <h5> {'Name: ' + students.name}<br />{'Age: ' + students.age}</h5> )}<br/>
        </div>
    }
}