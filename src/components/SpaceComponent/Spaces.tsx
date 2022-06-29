import { Component } from "react";
import { Space } from "../../model/Model";
import { DataService } from "../../services/DataService";
import { SpaceComponent } from "./SpaceComponent";
import { ConfirmModal } from "./ConfirmModal";

interface SpacesProps {
    dataService: DataService
}

interface SpacesState {
    spaces: Space[],
    showConfirmModal: boolean,
    confirmModalContent: string
}

export class Spaces extends Component<SpacesProps, SpacesState> {

    constructor(props: SpacesProps) {
        super(props);
        this.state = {
            spaces: [],
            showConfirmModal: false,
            confirmModalContent: ''
        };

        // Bind callbacks
        this.reserveSpace = this.reserveSpace.bind(this);
        this.closeConfirmModal = this.closeConfirmModal.bind(this);
    }

    // Set State after component mounts
    async componentDidMount() {
        const spaces = await this.props.dataService.getSpaces();
        this.setState({
            spaces: spaces
        });
    }

    private async reserveSpace(spaceID: string) {
        const reservationResult = await this.props.dataService.reserveSpace(spaceID);
        if (reservationResult) {
            this.setState({
                showConfirmModal: true,
                confirmModalContent: `You reserved space ID ${spaceID} and got reservation number ${reservationResult}`
            });
        }
        else {
            this.setState({
                showConfirmModal: true,
                confirmModalContent: `Your reservation for space ID ${spaceID} was unsuccessful`
            });
        }
    }

    private renderSpaces() {
        const rows: any[] = [];
        for (const space of this.state.spaces) {
            rows.push(
                <SpaceComponent 
                    location={space.location} 
                    name={space.name} 
                    spaceID={space.spaceID} 
                    reserveCallback={this.reserveSpace}
                />
            )
        }
        return rows;
    }

    private closeConfirmModal() {
        this.setState({
            showConfirmModal: false,
            confirmModalContent: ''
        });
    }

    render() {

        return <div>
            <h2>Spaces Page</h2>
            {this.renderSpaces()}
            <ConfirmModal 
                closeCallback={this.closeConfirmModal} 
                show={this.state.showConfirmModal} 
                content={this.state.confirmModalContent}
            />
        </div>
    }
}