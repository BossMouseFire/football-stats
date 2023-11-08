import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppSelector';
import { useAppSelector } from '../../hooks/useApDispatch';
import { competitionSelector } from '../../store/competition/competitionSelector';
import { fetchCompetitions } from '../../store/competition/competitionCreator';
import { CompetitionList, MainCompetitions } from '../../components/';
import styles from './Competitions.module.scss';

const CompetitionsPage = () => {
    const dispatch = useAppDispatch();
    const { competitions, isLoading } = useAppSelector(competitionSelector);

    useEffect(() => {
        dispatch(fetchCompetitions());
    }, []);

    return (
        <div className={styles.pageLeagues}>
            <div className={styles.aboutSite}>
                <p>FootSTAT – агрегатор футбольной статистики</p>
                <p>Актуальная информация о чемпионатах и командах</p>
            </div>
            <div className={styles.blockCompetitions}>
                <MainCompetitions />
                {competitions.length && (
                    <CompetitionList competitionList={competitions} />
                )}
            </div>
        </div>
    );
};

export default CompetitionsPage;
