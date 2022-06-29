import { Component } from "react";
import './ConfirmModal.css';

interface ConfirmModalProps {
    show: boolean,
    content: string,
    closeCallback: ()=>void
}

export class ConfirmModal extends Component<ConfirmModalProps> {

    render() {
        if (this.props.show) {
            return <div className="confirmModal">
                <div className="confirmContent">
                    <h2>Your Reservation</h2>
                    <h3 className="confirmText">{this.props.content}</h3>
                    <button onClick={()=>this.props.closeCallback()}>Close</button>
                </div>
            </div>
        }
        else {
            return null;
        }
    }
}