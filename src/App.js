import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {Employee} from './EmployeeComponents/EmployeeFunc';
//import {EmployeeClass} from './EmployeeComponents/EmployeeClass';
//import {StudentView} from './StudentComponents/StudentView';
//import FunctionClick from './components/FunctionClick';
//import {ClassFunctionClick} from './components/ClassFunctionClick';
//import {OnewayDataBinding} from './components/OnewayDataBinding';
//import {Login} from './components/Login';
//import {Unauthorized} from './components/Unauthorized';
//import {executeFunction} from './helper/callBack';
import {UserClass} from './UsersComponent/UserClass';
//import {CommentClass} from './UsersComponent/CommentClass';
import axios from 'axios';
import {CommentClass} from './UsersComponent/CommentClass';

// ** we need to extends React component in order to import plugins to package to be able to use tags
// ** this is a Class App
class App extends React.Component{
  
  constructor(props){
    super(props);
    console.log("App");

    // list of bounded event handler
    this.executeClick = this.executeClick.bind(this);

    this.state = {
      message: 'Hello',
      isLogin: true,
      age: 20,
      grades: 20.1,
      users: [],
      comments: []
    }
  }

  executeClick(props){
    this.setState({message: 'Hi'}, () => console.log(this.state.message));
  }

  handleOnChange = (event) => {
    console.log("App.handleOnChange");
    this.setState({message: event.target.value}, () => console.log(this.state.message));
  }

  renderComponent = () => {
    console.log("renderComponent");
    return this.state.isLogin ? <UserClass users={this.state.users}/> : <CommentClass comments={this.state.comments}/>
  }

  handleLoginClick = (event) => {
    console.log("handleLoginClick");

    axios.get('https://jsonplaceholder.typicode.com/comments?postId=1').then( response => {this.setState({comments: response.data})})
    this.setState({isLogin: !this.state.isLogin})
    this.renderComponent();
  }

  componentDidMount(){
    console.log("componentDidMount");
   // this.state.isLogin ? 
    axios.get('https://jsonplaceholder.typicode.com/users').then( response => this.setState({users: response.data})) //:
   // axios.get('https://jsonplaceholder.typicode.com/comments?postId=1').then( response2 => {this.setState({comments: response2.data})})
    
  }


  render(){
    return ( <div>
      {/* {this.renderComponent()} */}

      <button onClick={this.handleLoginClick}>change API</button>
      {this.renderComponent()}

      {/* <button onClick={this.handleLoginClick}>LOGIN</button>
          {this.renderComponent()} */}
      {/* <button onClick={executeFunction}>1Display Users</button> */}
    </div>)
  }

  // render() {
  //   let login = '';

  //   // ** 1 Conditional rendering : if/else
  //   if(this.state.isLogin){
  //     login = <Login />
  //   } else {
  //     login = <Unauthorized />
  //   }

  //   // ** 2 Conditional rendering : ternary > needs a returned value
  //   login = this.state.isLogin ? <Login /> : <Unauthorized />

  //   // ** 3 Conditional rendering : short circuit operator > doesn't return else value if false
  //   login = this.state.isLogin && <Login />

  //   return login
    // return (
    //   <div className="App">
    //     {/* <FunctionClick />
    //     <ClassFunctionClick /> */}
    //     <OnewayDataBinding message={this.state.message} handleOnChange={this.handleOnChange} />
    //     <Login />
    //     <Unauthorized / >
    //   </div>
    // )
  //}
}

// ------------------------------------------------------------------------------------------------------ //

// {/*let element = <div><h1>Hello World</h1><h2>hello</h2></div>;*/}

// ** this is a function App() is used for Employee, EmployeeClass,StudentView
// function App() {
//   //console.log(element);
//   console.log('App.app');
//   //let num = 25;
//   return (
//     <div className="App">
//       {/* {element}
//       {10 + 5} <br />
//       {'hello ' + 'world'} <br />
//       {10 == 5 ? 'equals to 5' : 'not equals to 5'} <br />
//       {num} <br />
//       {num = num + 5} <br /> 
//       //<EmployeeClass /> */}
//       {/* <Employee name='Kat' lastname='Rondina' />
//       <EmployeeClass name='Kat' lastname='Rondina' /> 
//       <StudentView name='Katrina'/>  
//       <StudentView />*/}

//       <FunctionClick />
      
      
//     </div>
//   );
// }

export default App;