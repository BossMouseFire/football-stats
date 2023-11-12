import React from 'react';
import { Tabs, TabsProps } from 'antd';
import { useAppSelector } from '../../hooks/useApDispatch';
import { competitionSelector } from '../../store/competition/competitionSelector';
import { TablesStandings } from '../TablesStandings/TablesStandings';

import styles from './CompetitionTabs.module.scss';
import { TeamList } from '../TeamList/TeamList';
import { MatchesCompetition } from '../MatchesCompetition/MatchesCompetition';
import { RangeValue } from '../MatchList/MatchListProps';
import { useAppDispatch } from '../../hooks/useAppSelector';
import { setRange } from '../../store/competition/competitionCreator';

export const CompetitionTabs = () => {
    const dispatch = useAppDispatch();

    const {
        standings,
        teams,
        matches,
        errorCompetitionStanding,
        errorCompetitionTeams,
        errorCompetitionMatches,
        dateTo,
        dateFrom,
    } = useAppSelector(competitionSelector);

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Турнирная таблица',
            children: (
                <TablesStandings
                    standings={standings}
                    error={errorCompetitionStanding}
                />
            ),
        },
        {
            key: '2',
            label: 'Список команд',
            children: <TeamList teams={teams} error={errorCompetitionTeams} />,
        },
        {
            key: '3',
            label: 'Матчи лиги',
            children: (
                <MatchesCompetition
                    matches={matches}
                    error={errorCompetitionMatches}
                    dateTo={dateTo}
                    dateFrom={dateFrom}
                    getRangeMatches={getRangeMatches}
                />
            ),
        },
    ];

    return (
        <Tabs
            defaultActiveKey='1'
            items={items}
            indicatorSize={(origin) => origin - 16}
            className={styles.tabs}
        />
    );

    function getRangeMatches(dates: RangeValue) {
        if (dates) {
            dispatch(setRange({ dateFrom: dates[0], dateTo: dates[1] }));
        }
    }
};
