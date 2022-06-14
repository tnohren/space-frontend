import React, { SyntheticEvent } from 'react';
import { User } from '../model/Model';
import { AuthService } from '../services/AuthService';

interface LoginProps {
    authService: AuthService,
    setUser: (user: User) => void
}

interface LoginState {
    username: string,
    password: string,
    loginAttempted: boolean,
    loginSuccessful: boolean
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState> {
    state: LoginState = {
        username: "",
        password: "",
        loginAttempted: false,
        loginSuccessful: false
    }

    private setUsername(event: CustomEvent) {
        this.setState({username: event.target.value});
    }

    private setPassword(event: CustomEvent) {
        this.setState({password: event?.target.value});
    }

    private async handleLogin(event: SyntheticEvent) {
        event.preventDefault();
        this.setState({loginAttempted: true});
        const result = await this.props.authService.login(this.state.username, this.state.password);
        if (result) {
            this.setState({loginSuccessful: true});
            this.props.setUser(result);
        }
        else {
            console.log('Login unsuccessful');
        }
    }

    render() {
        let loginMessage: any;

        if (this.state.loginAttempted) {
            if (this.state.loginSuccessful) {
                loginMessage = <label>Login Successful</label>;
            }
            else {
                loginMessage = <label> Login Failed </label>;
            }
        }

        return (
            <div>
                <h2> Please login </h2>
                <form onSubmit={e => this.handleLogin(e)}>
                    <input value={this.state.username} onChange={e => this.setUsername(e)}/><br/>
                    <input value={this.state.password} type='password' onChange={e => this.setPassword(e)}/><br/>
                    <input value='Login' type='submit'/>
                </form>
                {loginMessage}
            </div>
        )
    }
}