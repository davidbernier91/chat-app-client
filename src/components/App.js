import React, { Component } from 'react';
import NavBarTop from './NavBarTop';
import Chat from './Chat';
// import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        {/* <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )} */}
        <NavBarTop/>
        <Chat/>
        
      </div>
    );
  }
}

export default App;