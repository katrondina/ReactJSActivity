import React from 'react';

export class UserClass extends React.Component{
    
    render(){
        return(<div className='userClass'><h1>User API Table</h1>
            <table><thead><tr><td>id</td><td>name</td><td>username</td></tr></thead>
            {this.props.users.map( users => {
                return (<tbody><tr><td>{users.id}</td><td>{users.name}</td><td>{users.username}</td></tr></tbody>)
            })}</table>
        </div>)
    }

}