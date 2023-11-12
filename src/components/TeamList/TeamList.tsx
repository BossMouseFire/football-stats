import React from 'react';

import styles from './TemList.module.scss';
import { Team } from './Team';
import { TeamListProps } from './TeamListProps';
import { ErrorBlock } from '../ErrorBlock/ErrorBlock';

export const TeamList: React.FC<TeamListProps> = ({ teams, error }) => {
    if (error) {
        return <ErrorBlock error={error} />;
    }

    return (
        <div className={styles.teams}>
            {teams.map((team) => (
                <Team team={team} key={team.id} />
            ))}
        </div>
    );
};
