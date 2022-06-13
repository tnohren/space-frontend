import React from 'react';
import { ChildComponent } from './ChildComponent';
//import './App.css';

interface AppState {
  appCounter: number
}

export class App extends React.Component<{}, AppState>{
  state: AppState = {
    appCounter: 0
  }

  private incrementCounter() {
    this.setState({
      appCounter: this.state.appCounter + 1
    });
  }

  render() {
    console.log("rendering parent");
    return(
      <div className="ParentComponent">
        Parent Component <br/>
        <button onClick={()=>this.incrementCounter()}>Increment parent</button><br/>
        <ChildComponent appCounter={this.state.appCounter}/>
      </div>
    )
  }
}