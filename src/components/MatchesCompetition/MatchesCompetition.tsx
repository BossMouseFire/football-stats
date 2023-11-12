import React from 'react';
import { ErrorBlock } from '../ErrorBlock/ErrorBlock';
import { MatchList } from '../MatchList/MatchList';
import { MatchesCompetitionProps } from './MatchesCompetitionProps';

export const MatchesCompetition: React.FC<MatchesCompetitionProps> = ({
    error,
    matches,
    getRangeMatches,
    dateFrom,
    dateTo,
}) => (
    <>
        {error && <ErrorBlock error={error} />}
        {matches && (
            <MatchList
                matches={matches}
                getRangeMatches={getRangeMatches}
                dateFrom={dateFrom}
                dateTo={dateTo}
            />
        )}
    </>
);
