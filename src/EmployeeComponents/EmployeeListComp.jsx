import React from 'react';

export class EmployeeListComp extends React.Component{
    
    render(){
        console.log("EmployeeListComp.render");
        return <div>{this.props.employeeList[0].firstName} <br />
            {this.props.employeeList[0].lastName} <br />
            {this.props.employeeList[0].age} <br />
        </div>
    }
}