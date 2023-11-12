import React from 'react';
import { Team as TeamModel } from '../../model/Team';

import styles from './TemList.module.scss';

interface TeamProps {
    team: TeamModel;
}

export const Team: React.FC<TeamProps> = ({ team }) => {
    return (
        <div className={styles.team}>
            <img src={team.crest || ''} alt={team.name || ''} />
            <span>{team.name}</span>
        </div>
    );
};
