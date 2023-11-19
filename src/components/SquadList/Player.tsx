import React from 'react';
import { Player as PlayerData } from '../../model/Player';
import { getDate } from '../../utils/date';
import styles from './SquadList.module.scss';

interface PlayerProps {
    player: PlayerData;
}

export const Player: React.FC<PlayerProps> = ({ player }) => (
    <div className={styles.player}>
        <span>{player.position}</span>
        <span>{player.name}</span>
        <span>{getDate(player.dateOfBirth)}</span>
    </div>
);
