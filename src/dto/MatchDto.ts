import { SeasonDto } from './SeasonDto';
import { TableTeamDto } from './TableTeamDto';

export interface MatchDto {
    id: number;
    status: string;
    utcDate: string;
    season: SeasonDto;
    score: SeasonDto;
    homeTeam: TableTeamDto;
    awayTeam: TableTeamDto;
}
