import api from '../config';
import { Team } from '../../model/Team';
import { TeamDto } from '../../dto/TeamDto';
import { Match } from '../../model/Match';
import { TeamMatchesParams, TeamMatchesResponse } from './types';

export class TeamApi {
    public static async getTeam(id: string): Promise<Team> {
        const data = await api.get<TeamDto>(`/teams/${id}`);
        return new Team(data);
    }
    public static async getTeamMatches(
        id: string,
        params?: TeamMatchesParams,
    ): Promise<Match[]> {
        const data = await api.get<TeamMatchesResponse>(
            `/teams/${id}/matches`,
            { params },
        );

        if (data) {
            return data.matches.map((item) => new Match(item));
        }
        return [];
    }
}
