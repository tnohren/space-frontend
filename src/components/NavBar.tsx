import React from 'react';
import { Link } from 'react-router-dom';
import { User } from "../model/Model";

interface NavBarProps {
    user: User | undefined
}

export class NavBar extends React.Component<NavBarProps> {

    render() {
        let authStatus: any;
        if (this.props.user) {
            authStatus = <Link to="/logout" style={{float: 'right'}}>{this.props.user.username}</Link>
        }
        else {
            authStatus = <Link to="/login" style={{float: 'right'}}>Login</Link>
        }

        return (
            <div className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                {authStatus}
            </div>
        )
    }
}