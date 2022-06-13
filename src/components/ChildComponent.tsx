import React from 'react';

interface ChildProps {
    appCounter: number
}

interface ChildState {
    childCounter: number
}

export class ChildComponent extends React.Component<ChildProps, ChildState> {
    state: ChildState = {
        childCounter: 0
    }

    private incrementCounter() {
        this.setState({
            childCounter: this.state.childCounter + 1
        });
    }

    render() {
        console.log("Rendering child component");
        return(
            <div>
                Child component <br/>
                <button onClick={()=>this.incrementCounter()}> Increment Child Counter </button><br/>
                <label>Child counter: {this.state.childCounter}</label><br/>
                <label>Parent counter: {this.props.appCounter}</label><br/>
            </div>
        )
    }
}