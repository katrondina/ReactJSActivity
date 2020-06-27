import React from 'react';

export class UserClass extends React.Component{
    
    render(){
        console.log('UserClass.render');
        return(<div className='userClass'><h1>User API Table</h1>
            <table><thead><tr><td>id</td><td>name</td><td>username</td></tr></thead>
            {this.props.users.map( (users,i) => {
                return (<tbody key={i}><tr key={i}><td>{users.id}</td><td>{users.name}</td><td>{users.username}</td></tr></tbody>)
            })}</table>
        </div>)
    }

}