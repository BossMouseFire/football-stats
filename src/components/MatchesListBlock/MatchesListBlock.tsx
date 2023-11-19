import React from 'react';
import { ErrorBlock } from '../ErrorBlock/ErrorBlock';
import { MatchList } from '../MatchList/MatchList';
import { MatchesListBlockProps } from './MatchesListBlockProps';
import { Spin } from 'antd';

export const MatchesListBlock: React.FC<MatchesListBlockProps> = ({
    isLoading,
    error,
    matches,
    getRangeMatches,
    dateFrom,
    dateTo,
}) => {
    if (isLoading) {
        return <Spin />;
    }
    if (error) {
        return <ErrorBlock error={error} />;
    }
    return (
        <MatchList
            matches={matches}
            getRangeMatches={getRangeMatches}
            dateFrom={dateFrom}
            dateTo={dateTo}
        />
    );
};
