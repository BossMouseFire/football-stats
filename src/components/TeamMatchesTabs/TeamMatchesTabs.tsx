import React, { useEffect } from 'react';
import { Tabs, TabsProps } from 'antd';

import styles from './TeamMatchesTabs.module.scss';
import { TeamMatchesBlock } from '../TeamMatchesBlock/TeamMatchesBlock';
import { useAppDispatch } from '../../hooks/useAppSelector';
import { setVenue } from '../../store/team/teamCreator';
import { SquadList } from '../SquadList/SquadList';
import { useAppSelector } from '../../hooks/useApDispatch';
import { teamSelector } from '../../store/team/teamSelector';

export const TeamMatchesTabs = () => {
    const dispatch = useAppDispatch();
    const { team } = useAppSelector(teamSelector);

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Домашние матчи',
            children: <TeamMatchesBlock />,
        },
        {
            key: '2',
            label: 'Выездные матчи',
            children: <TeamMatchesBlock />,
        },
        {
            key: '3',
            label: 'Состав',
            children: <SquadList squad={team?.squad || []} />,
        },
    ];

    return (
        <Tabs
            defaultActiveKey='1'
            items={items}
            indicatorSize={(origin) => origin - 16}
            className={styles.tabs}
            onTabClick={handleOnTabClick}
        />
    );

    function handleOnTabClick(activeKey: string) {
        if (activeKey === '1') {
            dispatch(setVenue('HOME'));
        }

        if (activeKey === '2') {
            dispatch(setVenue('AWAY'));
        }
    }
};
