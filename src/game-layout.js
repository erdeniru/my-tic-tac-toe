import PropTypes from 'prop-types';
import styles from './game.module.css';

export const GameLayout = ({ title, children }) => {
    return (
        <main className={styles.game}>
            <h1 className={styles.game__title}>{title}</h1>
            <div className={styles.game__content}>
                <div className={styles['tic-tac-toe']}>{children}</div>
            </div>
        </main>
    );
};

GameLayout.propTypes = {
    title: PropTypes.string,
};
