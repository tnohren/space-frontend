import { Component } from "react";
import defaultSpaceImage from '../../assets/defaultSpaceImage.jpg';
import './SpaceComponent.css';

interface SCProps {
    spaceID: string,
    name: string,
    location: string,
    imgUrl?: string,
    reserveCallback: (spaceID: string) => void 
}

export class SpaceComponent extends Component <SCProps> {

    private handleImg() {
        if (this.props.imgUrl) {
            return <img src={this.props.imgUrl} alt=""/>
        }
        else {
            return <img src={defaultSpaceImage} alt=""/>
        }
    }
    render() {
        return <div className='spaceComponent'>
            {this.handleImg()}
            <label className='spaceName'>{this.props.name}</label><br/>
            <label className='spaceID'>{this.props.spaceID}</label><br/>
            <label className='spaceLocation'>{this.props.location}</label><br/>
            <button onClick={()=>this.props.reserveCallback(this.props.spaceID)}>Reserve</button>
        </div>
    }
}