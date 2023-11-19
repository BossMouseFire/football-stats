import React from 'react';
import { TeamInfoProps } from './TeamInfoProps';

import styles from './TeamInfo.module.scss';
export const TeamInfo: React.FC<TeamInfoProps> = ({ team }) => {
    return (
        <div className={styles.team}>
            <div className={styles.teamName}>
                <span>{team?.name}</span>
                {team?.crest && (
                    <img src={team?.crest} alt={team?.shortName || ''} />
                )}
            </div>
            <div className={styles.basicInfo}>
                <div>
                    <span>Год основания:</span>
                    <span>{team.founded} год</span>
                </div>
                <div>
                    <span>Веб-сайт:</span>
                    <span>
                        <a href={team?.website || ''}>{team.website}</a>
                    </span>
                </div>
                {team.coach && (
                    <div>
                        <span>Главный тренер:</span>
                        <span>{team.coach.name}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
