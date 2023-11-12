import React, { useMemo, useState } from 'react';
import { MatchListProps, RangeValue } from './MatchListProps';
import { Match } from './Match';
import { Pagination, DatePicker } from 'antd';
import styles from './MatchList.module.scss';
import clsx from 'clsx';

const { RangePicker } = DatePicker;

const pageSize = 10;

export const MatchList: React.FC<MatchListProps> = ({
    matches,
    getRangeMatches,
    dateTo,
    dateFrom,
}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const total = matches.length;

    const matchesSlice = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        const end = currentPage * pageSize;
        return matches.slice(start, end);
    }, [currentPage, matches]);

    return (
        <div className={styles.matchListBlock}>
            <RangePicker
                className={styles.dateRange}
                value={[dateFrom, dateTo]}
                onChange={onChangeDateRange}
            />
            <div>
                {matchesSlice.map((match, index) => (
                    <Match
                        match={match}
                        key={match.id}
                        className={clsx(index !== 0 && styles.matchMargin)}
                    />
                ))}
            </div>
            <Pagination
                className={styles.pagination}
                total={total}
                showSizeChanger={false}
                onChange={onChangeCurrentPage}
            />
        </div>
    );

    function onChangeCurrentPage(page: number) {
        setCurrentPage(page);
    }

    function onChangeDateRange(values: RangeValue) {
        getRangeMatches(values);
    }
};
