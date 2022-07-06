import React , {Component} from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import './App.css';

class App extends Component  {
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

  render(){
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    )
  }
  
}
export default App;
