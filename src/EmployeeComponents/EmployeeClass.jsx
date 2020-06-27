import React from 'react';
import {EmployeeListComp} from './EmployeeListComp';

//i think this is an example of stateful/smart/container component?

// this is super constructor, the first to display when calling this class?
export class EmployeeClass extends React.Component{
    constructor(props){
        console.log("EmployeeClass.constructor");
        super(props);
        //console.log(this.props.name);
        this.state = {
            name: 'katrina',
            lastName: 'Rondina',
            age: 20,
            skills: ['Java', 'React'],
            employeeList: [{
                firstName: 'Kat',
                lastName: 'Rondina',
                age: 19,
                skills: ['Java','React']
            },
            {
                firstName: 'Carol',
                lastName: 'Garcia',
                age: 21,
                skills: ['Salesforce', 'Workday']
            },
            {
                firstName: 'Christian',
                lastName: 'Santos',
                age: '24',
                skills: ['React','Java','Talon']
            }]
        }
    }

    // this is for when you want to update whatever is in your constructor?
    componentDidMount(){
        console.log("EmployeeClass.componendDidMount");
        //this.state.name = 'Kat Rose';
        this.setState(
            {name: 'James'}
        )
    }

    // this is to validate if it was updated?
    componentDidUpdate(){
        console.log("EmployeeClass.componentDidUpdate");

    }

    // this is for rendering calls/updates
    render(){
        console.log("EmployeeClass.render");
        let newEmployeeList = this.state.employeeList.filter( (employee) => employee.age >= 20 );
    return ( 
    <div>
        {/*<h1>Hello {this.props.name + ' ' + this.props.lastname} EmployeeClass!</h1> //this is outside div but inside return*/}
        {/* <h2>{this.state.name}</h2> */}
        {/* <h2>{this.state.employee.firstName}</h2>
        <h2>{this.state.employee.lastName}</h2>
        <h2>{this.state.employee.salary}</h2>
        <h2>{this.state.employee.skills}</h2> */}
        <EmployeeListComp employeeList={this.state.employeeList}/>
    {this.state.employeeList.map( (employee) => <h3>{employee.firstName}</h3> )}
    List of Employees with age greater than 20:  <br />
    {newEmployeeList.map( (employee) => <h3>{employee.firstName}</h3>)}
    </div>);
    }
}