import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppSelector';
import { useAppSelector } from '../../hooks/useApDispatch';
import { competitionsSelector } from '../../store/competitions/competitionsSelector';
import { fetchCompetitions } from '../../store/competitions/competitionsCreator';
import {
    CompetitionList,
    MainCompetitions,
    SearchCompetition,
} from '../../components/';
import styles from './Competitions.module.scss';
import { Spin } from 'antd';
import { ErrorBlock } from '../../components/ErrorBlock/ErrorBlock';

const CompetitionsPage = () => {
    const dispatch = useAppDispatch();
    const { filterCompetitions, isLoading, error } =
        useAppSelector(competitionsSelector);

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
                <div className={styles.searchBlock}>
                    <SearchCompetition />
                </div>
                {error && <ErrorBlock error={error} />}
                {!error && isLoading && <Spin />}
                {!error && !filterCompetitions.length && (
                    <div className={styles.empty}>Ничего не найдено</div>
                )}
                {!error && filterCompetitions.length && (
                    <CompetitionList competitionList={filterCompetitions} />
                )}
            </div>
        </div>
    );
};

export default CompetitionsPage;
