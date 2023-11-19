import { ErrorData } from '../../errors/ErrorData';
import { Competition } from '../../model/Competition';
import { Standing } from '../../model/Standing';
import { Match } from '../../model/Match';
import { Team } from '../../model/Team';
import { Dayjs } from 'dayjs';

export interface CompetitionStandingProps {
    id: string;
    season?: string;
}

export interface CompetitionTeamsProps {
    id: string;
    season?: string;
}

export interface CompetitionMatchesProps {
    id: string;
    dateFrom?: string;
    dateTo?: string;
    season?: string;
}

export interface InitialStateCompetition {
    isLoadingCompetition: boolean;
    isLoadingCompetitionStanding: boolean;
    isLoadingCompetitionMatches: boolean;
    isLoadingCompetitionTeams: boolean;

    errorCompetition: ErrorData | undefined;
    errorCompetitionStanding: ErrorData | undefined;
    errorCompetitionMatches: ErrorData | undefined;
    errorCompetitionTeams: ErrorData | undefined;

    competition: Competition | null;
    standings: Standing[];
    matches: Match[];
    teams: Team[];

    dateFrom: Dayjs | null;
    dateTo: Dayjs | null;
    season?: string;
}
