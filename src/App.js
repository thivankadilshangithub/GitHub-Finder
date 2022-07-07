import React , {Component} from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

import './App.css';

 /* 
 render(){
    const name = 'John Doe';
    const loading = true;
    const showName = true;

    if(loading) {
      return <h4>Loading...</h4>
    }

    return (
      <div className="App">
        <h1>My App</h1>
        {loading ? (<h4>Loading...</h4> ): (<h1>Hello from React {showName && name}</h1>) }   
      </div>
    ); 
  }
  
  */

class App extends Component  {

state = {
  users:[],
  loading: false
}

async componentDidMount(){
  // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);

  this.setState({ loading: true});
  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  this.setState({users: res.data , loading: false})

  // console.log(res.data);
}
  render(){
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  }
}
export default App;
