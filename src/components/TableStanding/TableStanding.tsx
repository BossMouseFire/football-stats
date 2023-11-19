import React from 'react';
import { TeamStanding } from './TeamStanding';
import { TableStandingProps } from './TableStandingProps';

import styles from './TableStanding.module.scss';

export const TableStanding: React.FC<TableStandingProps> = ({ table }) => {
    return (
        <div className={styles.tableStandings}>
            <table>
                <tr className={styles.head}>
                    <th>#</th>
                    <th>Команда</th>
                    <th>С</th>
                    <th>В</th>
                    <th>Н</th>
                    <th>П</th>
                    <th>РГ</th>
                    <th>Очки</th>
                </tr>
                {table.map((team) => (
                    <TeamStanding teamStat={team} key={team?.team.id} />
                ))}
            </table>
        </div>
    );
};
