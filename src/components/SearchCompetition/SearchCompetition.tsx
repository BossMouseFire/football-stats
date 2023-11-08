import React, { ChangeEvent } from 'react';
import { Input } from 'antd';
import { useAppDispatch } from '../../hooks/useAppSelector';
import competitionAction from '../../store/competition/competitionAction';

import styles from './SearchCompetiton.module.scss';

export const SearchCompetition = () => {
    const dispatch = useAppDispatch();

    return (
        <Input
            className={styles.search}
            placeholder='Введите название соревнования'
            onChange={handleSearchCompetition}
        />
    );

    function handleSearchCompetition(event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.value;
        dispatch(competitionAction.setFilter(name));
    }
};
