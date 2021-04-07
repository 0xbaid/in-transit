import React from 'react';
import * as styles from './banner.module.css'

const banner = ({title, info, children}) => {
    return (
        <div className={styles.banner}>
            <h1>{title}</h1>
            <p>{info}</p>
            {children}
        </div>
    );
};

export default banner;