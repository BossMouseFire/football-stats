import React from 'react';
import { Team as TeamModel } from '../../model/Team';

import styles from './TemList.module.scss';
import { useNavigate } from 'react-router-dom';

interface TeamProps {
    team: TeamModel;
}

export const Team: React.FC<TeamProps> = ({ team }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.team}>
            <img src={team.crest || ''} alt={team.name || ''} />
            <span onClick={() => navigate(`/team/${team.id}`)}>
                {team.name}
            </span>
        </div>
    );
};
