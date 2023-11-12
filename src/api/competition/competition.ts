import api from '../config';
import {
    CompetitionMatchesParams,
    CompetitionMatchesResponse,
    CompetitionsResponse,
    CompetitionStandings,
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

    public static async getCompetition(id: string): Promise<Competition> {
        const data = await api.get<CompetitionDto>(`/competitions/${id}`);
        return new Competition(data);
    }

    public static async getCompetitionStanding(
        id: string,
        season?: string,
    ): Promise<CompetitionStandings | undefined> {
        const data = await api.get<CompetitionStandingsResponse>(
            `/competitions/${id}/standings`,
            {
                params: {
                    season,
                },
            },
        );

        if (data) {
            const competition = new Competition({
                currentSeason: data.season,
                ...data.competition,
            });
            return {
                standings: data.standings.map((item) => new Standing(item)),
                competition,
            };
        }
        return undefined;
    }

    public static async getCompetitionMatches(
        id: string,
        params?: CompetitionMatchesParams,
    ): Promise<Match[]> {
        const data = await api.get<CompetitionMatchesResponse>(
            `/competitions/${id}/matches`,
            { params },
        );

        if (data) {
            return data.matches.map((item) => new Match(item));
        }
        return [];
    }

    public static async getCompetitionTeams(
        id: string,
        season?: string,
    ): Promise<Team[]> {
        const data = await api.get<CompetitionTeamsResponse>(
            `/competitions/${id}/teams`,
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
