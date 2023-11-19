import { ErrorData } from '../../errors/ErrorData';
import { Match } from '../../model/Match';
import { Team } from '../../model/Team';
import { Dayjs } from 'dayjs';

export interface TeamMatchesProps {
    id: string;
    venue: 'HOME' | 'AWAY';
    dateFrom?: string;
    dateTo?: string;
}

export interface InitialStateTeam {
    isLoadingTeam: boolean;
    isLoadingTeamMatches: boolean;

    errorTeam: ErrorData | undefined;
    errorTeamMatches: ErrorData | undefined;

    team: Team | null;
    matches: Match[];

    venue: 'HOME' | 'AWAY';
    dateFrom: Dayjs | null;
    dateTo: Dayjs | null;
}
