import React from 'react';
import { dateCompetition } from '../../utils/dateCompetition';
import { LeagueInfoProps } from './LeagueInfoProps';

import styles from './LeagueInfo.module.scss';
import { Select } from 'antd';
import { getListYears } from '../../utils/getListYears';
import { useAppDispatch } from '../../hooks/useAppSelector';
import { setSeason } from '../../store/competition/competitionCreator';

const options = getListYears(4).map((year) => ({
    label: year,
    value: String(year),
}));

export const LeagueInfo: React.FC<LeagueInfoProps> = ({
    competition,
    teamLength,
}) => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.league}>
            <div className={styles.leagueName}>
                <span>{competition?.name}</span>
                {competition?.emblem && (
                    <img src={competition?.emblem} alt={'emblem'} />
                )}
            </div>
            <Select
                defaultValue={options[0]}
                options={options}
                className={styles.select}
                onSelect={handleSelectSeason}
            />
            <div className={styles.basicInfo}>
                <div>
                    <span>Даты проведения:</span>
                    <span>
                        {dateCompetition(
                            competition?.currentSeason.startDate || '',
                            competition?.currentSeason.endDate || '',
                        )}
                    </span>
                </div>
                <div>
                    <span>Количество команд:</span>
                    <span>{teamLength}</span>
                </div>
                <div>
                    <span>Стадия сезона:</span>
                    <span>
                        {competition?.currentSeason?.currentMatchday}-й тур
                        чемпионата
                    </span>
                </div>
            </div>
        </div>
    );

    function handleSelectSeason(value: any) {
        dispatch(setSeason(value as string));
    }
};
