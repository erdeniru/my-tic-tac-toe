import { connect } from 'react-redux';
import { Player } from '../../components';
import { STATUS } from '../../constants';
import { MESSAGE_TURN, MESSAGE_CONGRATULATION, MESSAGE_DRAW } from '../../constants';
import styles from './information.module.css';
import { Component } from 'react';

class InformationContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            classInformation: '',
        };
    }

    updatedStatus = (status) => {
        console.log(status);
        if (status === STATUS.TURN) {
            this.setState({
                message: MESSAGE_TURN,
                classInformation: styles.content__message,
            });
        } else if (status === STATUS.WIN) {
            this.setState({
                message: MESSAGE_CONGRATULATION,
                classInformation: styles.content__congratulation,
            });
        } else if (status === STATUS.DRAW) {
            this.setState({
                message: MESSAGE_DRAW,
                classInformation: styles.content__draw,
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
            <div className={styles.content}>
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
