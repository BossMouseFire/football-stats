import React from 'react';
import { useAppDispatch } from '../../hooks/useAppSelector';
import { MatchesListBlock } from '../MatchesListBlock/MatchesListBlock';
import { useAppSelector } from '../../hooks/useApDispatch';
import { teamSelector } from '../../store/team/teamSelector';
import { RangeValue } from '../MatchList/MatchListProps';
import { setRange } from '../../store/team/teamCreator';

export const TeamMatchesBlock = () => {
    const dispatch = useAppDispatch();
    const {
        isLoadingTeamMatches,
        matches,
        dateTo,
        dateFrom,
        errorTeamMatches,
    } = useAppSelector(teamSelector);

    return (
        <MatchesListBlock
            isLoading={isLoadingTeamMatches}
            matches={matches}
            error={errorTeamMatches}
            dateTo={dateTo}
            dateFrom={dateFrom}
            getRangeMatches={getRangeMatches}
        />
    );

    function getRangeMatches(dates: RangeValue) {
        if (dates) {
            dispatch(setRange({ dateFrom: dates[0], dateTo: dates[1] }));
        } else {
            dispatch(setRange({ dateFrom: null, dateTo: null }));
        }
    }
};
