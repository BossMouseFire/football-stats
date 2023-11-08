import api from '../config';
import {
    CompetitionMatchesParams,
    CompetitionMatchesResponse,
    CompetitionsResponse,
    CompetitionStandingsResponse,
    CompetitionTeamsResponse,
} from './types';
import { Competition } from '../../model/Competition';
import { Standing } from '../../model/Standing';
import { CompetitionDto } from '../../dto/CompetitionDto';
import { Match } from '../../model/Match';
import { Team } from '../../model/Team';

export class CompetitionApi {
    public static async getCompetitions(): Promise<Competition[]> {
        const data = await api.get<CompetitionsResponse>('/competitions');

        if (data) {
            return data.competitions.map((item) => new Competition(item));
        }
        return [];
    }

    public static async getCompetition(id: number): Promise<Competition> {
        const data = await api.get<CompetitionDto>(`/competition/${id}`);
        return new Competition(data);
    }

    public static async getCompetitionStanding(
        id: number,
        season?: string,
    ): Promise<Standing[]> {
        const data = await api.get<CompetitionStandingsResponse>(
            `/competition/${id}/standings`,
            {
                params: {
                    season,
                },
            },
        );

        if (data) {
            return data.standings.map((item) => new Standing(item));
        }
        return [];
    }

    public static async getCompetitionMatches(
        id: number,
        params?: CompetitionMatchesParams,
    ): Promise<Match[]> {
        const data = await api.get<CompetitionMatchesResponse>(
            `/competition/${id}/matches`,
            { params },
        );

        if (data) {
            return data.matches.map((item) => new Match(item));
        }
        return [];
    }

    public static async getCompetitionTeams(
        id: number,
        season?: string,
    ): Promise<Team[]> {
        const data = await api.get<CompetitionTeamsResponse>(
            `/competition/${id}/teams`,
            {
                params: {
                    season,
                },
            },
        );

        if (data) {
            return data.teams.map((item) => new Team(item));
        }
        return [];
    }
}
