import React from "react";
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                Somethine has gone wrong!<br />
                We are already fixing it!
            </p>
        </>
    );
}

export default ErrorMessage;