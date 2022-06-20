import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/History';
import { User } from '../model/Model';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';
import { NavBar } from './NavBar';
import { create } from 'domain';
import { Home } from './Home';
import { Profile } from './Profile';
//import './App.css';

interface AppState {
  user: User | undefined
}

export class App extends React.Component<{}, AppState> {
  private authService = new AuthService();

  constructor(props: any) {
    super(props);
    this.state = {
      user: undefined
    };
    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User){
    this.setState({user: user});
    console.log("User logged in: " + user.username);
  }

  render() {
    return (
      <div className="wrapper">
        <Router history={history}>
          <div>
            <NavBar user={this.state.user}/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login'>
                <Login authService={this.authService} setUser={this.setUser}/>
              </Route>
              <Route exact path='/profile'>
                <Profile authService={this.authService} user={this.state.user}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}