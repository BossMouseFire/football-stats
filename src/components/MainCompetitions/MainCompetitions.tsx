import React from 'react';
import LaLiga from '../../assets/imgs/LaLiga.svg';
import PremierLeague from '../../assets/imgs/premier-league.svg';
import SeriaA from '../../assets/imgs/seriaA.svg';

import styles from './MainCompetitions.module.scss';

export const MainCompetitions = () => (
    <div className={styles.mainCompetitions}>
        <img src={LaLiga} alt='Ла Лига' />
        <img src={PremierLeague} alt='Премьер Лига' />
        <img src={SeriaA} alt='Серия А' />
    </div>
);
