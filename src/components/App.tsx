import React from 'react';
import { User } from '../model/Model';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';
//import './App.css';

interface AppState {
  user: User | undefined
}

export class App extends React.Component<{}, {}> {
  private authService = new AuthService();

  constructor(props: any) {
    super(props);
    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User){
    this.setState({user: user});
    console.log("User logged in: " + user.username);
  }

  render() {
    return (
      <div>Test
        <Login authService={this.authService} setUser={this.setUser}/>        
      </div>
    )
  }
}