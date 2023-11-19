import React, { useEffect } from 'react';
import { fetchTeam, fetchTeamMatches } from '../../store/team/teamCreator';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppSelector';
import { useAppSelector } from '../../hooks/useApDispatch';
import { teamSelector } from '../../store/team/teamSelector';
import { ErrorBlock } from '../../components/ErrorBlock/ErrorBlock';
import { TeamInfo } from '../../components';
import { TeamMatchesTabs } from '../../components/TeamMatchesTabs/TeamMatchesTabs';

const Team = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const { team, errorTeam } = useAppSelector(teamSelector);

    useEffect(() => {
        if (id) {
            dispatch(fetchTeam(id));
            dispatch(
                fetchTeamMatches({
                    id,
                    venue: 'HOME',
                }),
            );
        }
    }, [id]);

    if (errorTeam) {
        return <ErrorBlock error={errorTeam} />;
    }
    return (
        <div>
            {team && <TeamInfo team={team} />}
            <TeamMatchesTabs />
        </div>
    );
};

export default Team;
