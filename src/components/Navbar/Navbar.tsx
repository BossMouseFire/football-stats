import React from 'react';
import styles from './Navbar.module.scss';
import Ball from '../../assets/imgs/soccer-ball.svg';

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img src={Ball} alt='ball' />
            <span>
                <a id='link-main-page' href={'/'}>
                    FootSTAT
                </a>
            </span>
        </div>
    );
};
