import { Component } from 'react';
import { connect } from 'react-redux';
import { restartGameAction } from './../../store/action-creators';
import { CAPTION_RESTART } from '../../constants';

class ControlContainer extends Component {
    render() {
        return (
            <button className="btn" onClick={this.props.onReset}>
                {CAPTION_RESTART}
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onReset: () => dispatch(restartGameAction()),
});

export const Control = connect(null, mapDispatchToProps)(ControlContainer);
