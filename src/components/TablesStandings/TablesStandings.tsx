import React, { useMemo, useState } from 'react';
import { StandingType } from '../../dto/StandingDto';
import { Select } from 'antd';
import { TableStanding } from '../TableStanding/TableStanding';

import styles from './TablesStandings.module.scss';
import { labelsStanding, TablesStandingsProps } from './TablesStandindsProps';
import { ErrorBlock } from '../ErrorBlock/ErrorBlock';

export const TablesStandings: React.FC<TablesStandingsProps> = ({
    standings,
    error,
}) => {
    const [standingType, setStandingType] = useState<StandingType>(
        StandingType.TOTAL,
    );

    const option = useMemo(() => {
        if (standings) {
            return standings.map((standing) => ({
                value: standing.type,
                label: labelsStanding[standing.type],
            }));
        }
        return [];
    }, [standings]);

    const table = useMemo(() => {
        if (standings) {
            const standingFind = standings.find(
                (item) => item.type === standingType,
            );

            return standingFind?.table;
        }
        return undefined;
    }, [standingType, standings]);

    if (error) {
        return <ErrorBlock error={error} />;
    }

    return (
        <div className={styles.tables}>
            <Select
                defaultValue={StandingType.TOTAL}
                className={styles.select}
                options={option}
                onSelect={setStandingType}
            />
            {table && <TableStanding table={table} />}
        </div>
    );
};
