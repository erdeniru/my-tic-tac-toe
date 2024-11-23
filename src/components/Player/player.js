import { Component } from 'react';
import { PLAYER } from '../../constants';
import styles from './player.module.css';

export class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classPlayer: '',
        };
    }

    getClassNamePlayer = (player) => {
        let className;
        // prettier-ignore
        switch (player) {
            case PLAYER.CROSS: className = ' ' + styles.bg_x; break;
            case PLAYER.NOUGHT: className = ' ' + styles.bg_o; break;
            default: className = '';
        }

        return className;
    };

    componentDidMount() {
        this.setState({ classPlayer: this.getClassNamePlayer(this.props.player) });
    }

    componentDidUpdate(prevProps) {
        if (this.props.player === prevProps.player) return;

        this.setState({ classPlayer: this.getClassNamePlayer(this.props.player) });
    }

    render() {
        return <div className={styles.bg + this.state.classPlayer}></div>;
    }
}
