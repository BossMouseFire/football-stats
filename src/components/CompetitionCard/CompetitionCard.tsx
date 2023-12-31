import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CompetitionCardProps } from './CompetitionCardProps';
import styles from './CompetitionCard.module.scss';
import { dateCompetition } from '../../utils/dateCompetition';

export const CompetitionCard: React.FC<CompetitionCardProps> = ({
    competition,
}) => {
    const navigate = useNavigate();

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
                    <img
                        src={competition.emblem || ''}
                        alt={competition.name || ''}
                    />
                </div>
                <span>{competition.name}</span>
            </div>
            <div className={styles.dateLeague}>
                <div>
                    {currentSeasonStartDate?.getFullYear()}/
                    {currentSeasonEndDate?.getFullYear()}
                </div>
                <div>
                    {dateCompetition(
                        competition.currentSeason.startDate || '',
                        competition.currentSeason.endDate || '',
                    )}
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
                    onClick={() => navigate(`/competition/${competition.id}`)}
                >
                    Узнать подробнее
                </div>
            </div>
        </div>
    );
};
