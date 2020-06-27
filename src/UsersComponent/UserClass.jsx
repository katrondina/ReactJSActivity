import React from 'react';
//import axios from 'axios';

export class UserClass extends React.Component{
    
    // constructor(props){
    //     console.log("UserClass.constructor");
    //     super(props);
    //     this.executeClickDisplayUsers = this.executeClickDisplayUsers.bind(this);
    //     this.displayAUser = this.displayAUser.bind(this);
    //     this.state = { users: [] }
    // }

    // callAxios = (url) => {
    //     return axios.get(url).then( response => this.setState({users: response.data}))
    // }

    // executeClickDisplayUsers(){
    //     return this.callAxios('https://jsonplaceholder.typicode.com/users');
    //    // this.addUsers()
    //     //this.displayAUser();
    // }

    // addUsers(){
    //     this.setState();
    // }

    // displayAUser(){
    //     //this.state.users.map
    // }

    // // 
    // componentDidMount(){

    // }

    render(){
        return(<div>
            <table>
            <tr><td>id</td><td>name</td><td>username</td></tr>
            {this.props.users.map( users => {
                return (<tr>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.username}</td></tr>)
            })} </table>
        </div>)
    }

}