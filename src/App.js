import React from 'react';
import './App.css';
import {UserClass} from './components/UserClass';
import axios from 'axios';
import {CommentClass} from './components/CommentClass';

class App extends React.Component{
  
  constructor(props){
    super(props);
    console.log("App.constructor");

    this.state = {
      message: 'Hello',
      isLogin: true,
      buttonName: 'Switch to CommentsAPI',
      users: [],
      comments: []
    }
  }

  renderWhichAPI = () => {
    console.log("renderWhichAPI");
    return this.state.isLogin ? <UserClass users={this.state.users}/> : <CommentClass comments={this.state.comments}/>
  }

  handleSwitchClick = (event) => {
    console.log("handleSwitchClick");
    this.setState({isLogin: !this.state.isLogin});
    this.state.isLogin ? this.setState({buttonName: 'Switch to UsersAPI'}) : this.setState({buttonName: 'Switch to CommentsAPI'});
  }

  componentDidMount(){
    console.log("componentDidMount");
    axios.get('https://jsonplaceholder.typicode.com/users').then( response => this.setState({users: response.data}));
    axios.get('https://jsonplaceholder.typicode.com/comments?postId=1').then( response => {this.setState({comments: response.data})});
  }


  render(){
    console.log('App.render');
    return ( <div className='App'>
     <this.renderWhichAPI />
      <button onClick={this.handleSwitchClick}>{this.state.buttonName}</button>
    </div>);
  }
}

export default App;