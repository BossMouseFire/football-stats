import React, { useMemo } from 'react';
import { labelsMatch, MatchProps } from './MatchListProps';
import { getDate } from '../../utils/date';
import styles from './MatchList.module.scss';
import clsx from 'clsx';
import { Winner } from '../../dto/ScoreDto';

export const Match: React.FC<MatchProps> = ({ match, className }) => {
    const dateMatch = useMemo(() => {
        return getDate(match.utcDate);
    }, [match.utcDate]);

    const isWinnerHomeTeam = !!(
        match.score.winner && match.score.winner === Winner.HOME_TEAM
    );

    const isWinnerAwayTeam = !!(
        match.score.winner && match.score.winner === Winner.AWAY_TEAM
    );

    return (
        <div className={clsx(styles.match, className)}>
            <div className={styles.status}>{labelsMatch[match.status]}</div>
            <div className={styles.date}>{dateMatch}</div>
            <div
                className={clsx(
                    styles.team,
                    isWinnerHomeTeam && styles.winnerTeam,
                )}
            >
                <span>{match.homeTeam.name}</span>
                <img src={match.homeTeam.crest} alt={match.homeTeam.name} />
            </div>
            <div className={styles.score}>
                <div>
                    {match.score.winner ? match.score.fullTime.home : '-'}
                </div>
                :
                <div>
                    {match.score.winner ? match.score.fullTime.away : '-'}
                </div>
            </div>
            <div
                className={clsx(
                    styles.team,
                    isWinnerAwayTeam && styles.winnerTeam,
                )}
            >
                <span>{match.awayTeam.name}</span>
                <img src={match.awayTeam.crest} alt={match.awayTeam.name} />
            </div>
        </div>
    );
};
