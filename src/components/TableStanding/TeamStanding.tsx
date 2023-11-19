import React from 'react';
import { TeamStandingProps } from './TableStandingProps';
import { useNavigate } from 'react-router-dom';

export const TeamStanding: React.FC<TeamStandingProps> = ({ teamStat }) => {
    const navigate = useNavigate();

    return (
        <tr>
            <td>{teamStat.position}</td>
            <td>
                <div>
                    <img src={teamStat.team.crest} />
                    <span onClick={() => navigate(`/team/${teamStat.team.id}`)}>
                        {teamStat.team.name}
                    </span>
                </div>
            </td>
            <td>{teamStat.playedGames}</td>
            <td>{teamStat.won}</td>
            <td>{teamStat.draw}</td>
            <td>{teamStat.lost}</td>
            <td>{teamStat.goalDifference}</td>
            <td>{teamStat.points}</td>
        </tr>
    );
};
