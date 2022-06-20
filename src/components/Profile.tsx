import React from "react";
import { Link } from "react-router-dom";
import { User, UserAttribute } from "../model/Model";
import { AuthService } from "../services/AuthService";

interface ProfileState {
    userAttributes: UserAttribute[]
}
interface ProfileProps {
    user: User | undefined
    authService: AuthService
}

export class Profile extends React.Component<ProfileProps, ProfileState> {

    state: ProfileState = {
        userAttributes: []
    }

    async componentDidMount() {
        if (this.props.user) {
            const attributes = await this.props.authService.getUserAttributes(this.props.user);
            this.setState({
                userAttributes: attributes
            });
        }
    }

    private renderUserAttributes() {
        const attributes = [];
        for (const userAttribute of this.state.userAttributes) {
            attributes.push(<tr key={userAttribute.name}>
                <td><b>{userAttribute.name}</b></td>
                <td>{userAttribute.value}</td>
            </tr>);
        }
        return <table><tbody>{attributes}</tbody></table>;
    }

    render() {
        let profileInfo: any;

        if (this.props.user) {
            profileInfo = <div>
                <h3>Hello {this.props.user.username}!</h3>
                <h4>Here are your attributes: </h4>
                {this.renderUserAttributes()}
            </div>
        }
        else {
            profileInfo = <div>
                Please <Link to="login">login</Link>
            </div>
        }
        return (
            <div>
                Welcome to your Profile!
                {profileInfo}
            </div>
        )
    }
}