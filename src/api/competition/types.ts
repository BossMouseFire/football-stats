import { CompetitionDto } from '../../dto/CompetitionDto';
import { StandingDto } from '../../dto/StandingDto';
import { MatchDto } from '../../dto/MatchDto';
import { TeamDto } from '../../dto/TeamDto';
import { SeasonDto } from '../../dto/SeasonDto';
import { Standing } from '../../model/Standing';
import { Competition } from '../../model/Competition';
export interface CompetitionsResponse {
    competitions: CompetitionDto[];
}

type StandingCompetition = Pick<
    CompetitionDto,
    'id' | 'name' | 'emblem' | 'code' | 'type'
>;

export interface CompetitionStandingsResponse {
    competition: StandingCompetition;
    season: SeasonDto;
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

export interface CompetitionStandings {
    standings: Standing[];
    competition: Competition;
}
