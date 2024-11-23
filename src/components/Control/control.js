import { connect } from 'react-redux';
import { restartGameAction } from './../../store/action-creators';
import { CAPTION_RESTART } from '../../constants';
import stylesGame from '../../game.module.css';
import styles from './control.module.css';
import { Component } from 'react';

class ControlContainer extends Component {
    render() {
        return (
            <button
                className={`${stylesGame.btn} ${styles.restart}`}
                onClick={this.props.onReset}
            >
                {CAPTION_RESTART}
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onReset: () => dispatch(restartGameAction()),
});

export const Control = connect(null, mapDispatchToProps)(ControlContainer);
