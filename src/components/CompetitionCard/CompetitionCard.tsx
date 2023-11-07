import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CompetitionCardProps } from './CompetitionCardProps';
import styles from './CompetitionCard.module.scss';
import { Card, Image } from 'antd';
import { getDateToString } from '../../utils/date';

export const CompetitionCard: React.FC<CompetitionCardProps> = ({
    competition,
}) => {
    const navigate = useNavigate();

    const title = useMemo(() => {
        return (
            <div className={styles.title}>
                <img
                    src={competition.emblem}
                    alt={competition.name}
                    className={styles.logo}
                />
                <span>{competition.name}</span>
            </div>
        );
    }, [competition]);

    const currentSeasonStartDate = useMemo(() => {
        if (competition.currentSeason.startDate) {
            return new Date(competition.currentSeason.startDate);
        }
        return undefined;
    }, [competition.currentSeason.startDate]);

    const currentSeasonEndDate = useMemo(() => {
        if (competition.currentSeason.endDate) {
            return new Date(competition.currentSeason.endDate);
        }
        return undefined;
    }, [competition.currentSeason.endDate]);

    return (
        <div className={styles.leagueCard}>
            <div className={styles.titleLeague}>
                <div>
                    <img src={competition.emblem} alt={competition.name} />
                </div>
                <span>{competition.name}</span>
            </div>
            <div className={styles.dateLeague}>
                <div>
                    {currentSeasonStartDate?.getFullYear()}/
                    {currentSeasonEndDate?.getFullYear()}
                </div>
                <div>
                    {getDateToString(currentSeasonStartDate)}-
                    {getDateToString(currentSeasonEndDate)}
                </div>
            </div>
            <div className={styles.descriptionLeague}>
                <div className={styles.stageCompetition}>
                    <span>Стадия сезона</span>
                    <span>
                        {competition.currentSeason.currentMatchday}-й тур
                        чемпионата
                    </span>
                </div>
                <div
                    className={styles.aboutCompetition}
                    onClick={() => navigate(`/league?id=${competition.id}`)}
                >
                    Узнать подробнее
                </div>
            </div>
        </div>
    );
};
