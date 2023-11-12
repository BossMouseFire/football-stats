import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppSelector';
import {
    fetchCompetitionMatches,
    fetchCompetitionStandings,
    fetchCompetitionTeams,
} from '../../store/competition/competitionCreator';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useApDispatch';
import { competitionSelector } from '../../store/competition/competitionSelector';
import { CompetitionTabs, LeagueInfo } from '../../components';
import { ErrorBlock } from '../../components/ErrorBlock/ErrorBlock';

const Competition = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const { competition, errorCompetition, teams } =
        useAppSelector(competitionSelector);

    useEffect(() => {
        if (id) {
            dispatch(fetchCompetitionStandings({ id }));
            dispatch(fetchCompetitionTeams({ id }));
            dispatch(fetchCompetitionMatches({ id }));
        }
    }, []);

    if (errorCompetition) {
        return <ErrorBlock error={errorCompetition} />;
    }
    return (
        <div>
            {competition && (
                <LeagueInfo
                    competition={competition}
                    teamLength={teams.length}
                />
            )}
            <CompetitionTabs />
        </div>
    );
};

export default Competition;
