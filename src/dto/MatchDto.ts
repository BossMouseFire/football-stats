import { SeasonDto } from './SeasonDto';
import { TableTeamDto } from './TableTeamDto';
import { ScoreDto } from './ScoreDto';

export interface MatchDto {
    id: number;
    status: keyof typeof Status;
    utcDate: string;
    season: SeasonDto;
    score: ScoreDto;
    homeTeam: TableTeamDto;
    awayTeam: TableTeamDto;
}

export enum Status {
    SCHEDULED = 'SCHEDULED',
    LIVE = 'LIVE',
    IN_PLAY = 'IN_PLAY',
    PAUSED = 'PAUSED',
    FINISHED = 'FINISHED',
    POSTPONED = 'POSTPONED',
    SUSPENDED = 'SUSPENDED',
    CANCELLED = 'CANCELLED',
}
