import React from 'react';

export class CommentClass extends React.Component{

    // constructor(props){
    //     console.log("CommentClass");
    //     super(props);
    //     this.state = { comments: [] }
    // }

    render(){
        return(<div>
            <table>
            <tr><td>id</td><td>name</td><td>email</td></tr>
            {this.props.comments.map( comments => {
                return (<tr>
                <td>{comments.id}</td>
                <td>{comments.name}</td>
                <td>{comments.email}</td></tr>)
            })} </table>
        </div>)
    }
}