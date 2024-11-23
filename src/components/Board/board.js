import { connect } from 'react-redux';
import { setBoardCellAction } from '../../store/action-creators';
import { STATUS, PLAYER } from '../../constants';
import styles from './board.module.css';
import { Component } from 'react';

class BoardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isGameOver: STATUS.TURN,
        };
    }

    updatedStatus = (status) => {
        this.setState({
            isGameOver: status === STATUS.WIN || status === STATUS.DRAW,
        });
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
            <div
                className={
                    styles.content +
                    (this.state.isGameOver ? ' ' + styles.content_disabled : '') +
                    ''
                }
            >
                {this.props.board.map((value, index) => (
                    <div
                        key={index}
                        className={
                            // prettier-ignore
                            styles.cell + ' ' + styles.bg__cell +
                            (value === PLAYER.NOUGHT ? ' ' + styles.bg__cell_o : '') +
                            (value === PLAYER.CROSS ? ' ' + styles.bg__cell_x : '') +
                            (this.props.winPattern.indexOf(index) > -1 ? ' ' + styles.bg__cell_win : '') +
                            (value !== PLAYER.NONE ? ' ' + styles.cell_noHover : '') +
                            ''
                        }
                        {...(value === PLAYER.NONE
                            ? { onClick: () => this.props.onCellClick(index) }
                            : {})}
                    ></div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    status: state.status,
    board: state.board,
    winPattern: state.winPattern,
});

const mapDispatchToProps = (dispatch) => ({
    onCellClick: (indexCell) => dispatch(setBoardCellAction(indexCell)),
});

export const Board = connect(mapStateToProps, mapDispatchToProps)(BoardContainer);
