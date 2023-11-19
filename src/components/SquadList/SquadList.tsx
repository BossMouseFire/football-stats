import React from 'react';
import { SquadListProps } from './SquadListProps';
import { Player } from './Player';
import styles from './SquadList.module.scss';

export const SquadList: React.FC<SquadListProps> = ({ squad }) => {
    return (
        <div className={styles.squad}>
            {squad.map((item) => (
                <Player player={item} key={item.id} />
            ))}
        </div>
    );
};
