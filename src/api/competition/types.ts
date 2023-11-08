import { CompetitionDto } from '../../dto/CompetitionDto';
import { StandingDto } from '../../dto/StandingDto';
import { MatchDto } from '../../dto/MatchDto';
import { TeamDto } from '../../dto/TeamDto';
export interface CompetitionsResponse {
    competitions: CompetitionDto[];
}

export interface CompetitionStandingsResponse {
    standings: StandingDto[];
}

export interface CompetitionMatchesResponse {
    matches: MatchDto[];
}

export interface CompetitionTeamsResponse {
    teams: TeamDto[];
}

export interface CompetitionMatchesParams {
    dateFrom?: string;
    dateTo?: string;
    season?: string;
}
