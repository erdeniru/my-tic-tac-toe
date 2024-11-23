import { Component } from 'react';
import { connect } from 'react-redux';
import { Player } from '../../components';
import { STATUS } from '../../constants';
import { MESSAGE_TURN, MESSAGE_CONGRATULATION, MESSAGE_DRAW } from '../../constants';

class InformationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            classInformation: '',
        };
    }

    updatedStatus = (status) => {
        if (status === STATUS.TURN) {
            this.setState({
                message: MESSAGE_TURN,
                classInformation: 'text-gray-500',
            });
        } else if (status === STATUS.WIN) {
            this.setState({
                message: MESSAGE_CONGRATULATION,
                classInformation: 'text-green-600',
            });
        } else if (status === STATUS.DRAW) {
            this.setState({
                message: MESSAGE_DRAW,
                classInformation: 'text-blue-700',
            });
        }
    };

    componentDidMount() {
        this.updatedStatus(this.props.status);
    }

    componentDidUpdate(prevProps) {
        if (this.props.status === prevProps.status) return;

        this.updatedStatus(this.props.status);
    }

    render() {
        return (
            <div className="flex flex-nowrap justify-center items-center h-[75px]">
                <div className={this.state.classInformation}>{this.state.message}</div>
                <Player player={this.props.currentPlayer} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    status: state.status,
});

export const Information = connect(mapStateToProps)(InformationContainer);
