import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppSelector';
import { useAppSelector } from '../../hooks/useApDispatch';
import { competitionSelector } from '../../store/competition/competitionSelector';
import { fetchCompetitions } from '../../store/competition/competitionCreator';
import {
    CompetitionList,
    MainCompetitions,
    SearchCompetition,
} from '../../components/';
import styles from './Competitions.module.scss';
import { Spin } from 'antd';

const CompetitionsPage = () => {
    const dispatch = useAppDispatch();
    const { filterCompetitions, isLoading } =
        useAppSelector(competitionSelector);

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
                {isLoading && <Spin />}
                {!filterCompetitions.length && (
                    <div className={styles.empty}>Ничего не найдено</div>
                )}
                {filterCompetitions.length && (
                    <CompetitionList competitionList={filterCompetitions} />
                )}
            </div>
        </div>
    );
};

export default CompetitionsPage;
