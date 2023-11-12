import React from 'react';
import { TeamStandingProps } from './TableStandingProps';

export const TeamStanding: React.FC<TeamStandingProps> = ({ teamStat }) => {
    return (
        <tr>
            <td>{teamStat.position}</td>
            <td>
                <div>
                    <img src={teamStat.team.crest} />
                    <span>{teamStat.team.name}</span>
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
