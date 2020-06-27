import React from 'react';

export class CommentClass extends React.Component{

    render(){
        console.log('CommentClass.render');
        return(<div><h1>Comments API Table</h1>
            <table><thead><tr><td>id</td><td>name</td><td>email</td></tr></thead>
            {this.props.comments.map( (comments,i) => {
                return (<tbody key={i}><tr><td>{comments.id}</td><td>{comments.name}</td><td>{comments.email}</td></tr></tbody>)
            })}</table>
        </div>)
    }
}