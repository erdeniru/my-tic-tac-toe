import { connect } from 'react-redux';
import { setBoardCellAction } from '../../store/action-creators';
import { STATUS, PLAYER } from '../../constants';
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
                    'w-[100%] aspect-w-1 aspect-square bg-lime-400 flex flex-wrap gap-[5px]' +
                    (this.state.isGameOver ? ' pointer-events-none opacity-75' : '') +
                    ''
                }
            >
                {this.props.board.map((value, index) => (
                    <div
                        key={index}
                        className={
                            // prettier-ignore
                            "board_cell board_bg_cell" +
                            (value === PLAYER.NOUGHT ? ' board_bg_cell__o' : '') +
                            (value === PLAYER.CROSS ? ' board_bg_cell__x' : '') +
                            (this.props.winPattern.indexOf(index) > -1 ? ' board_bg_cell__win' : '') +
                            (value !== PLAYER.NONE ? ' board_bg_cell__noHover' : '') +
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
