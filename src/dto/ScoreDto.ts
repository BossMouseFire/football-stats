import { TimeDto } from './TimeDto';

export interface ScoreDto {
    duration: string | null;
    winner: keyof typeof Winner | null;
    fullTime: TimeDto;
    halfTime: TimeDto;
}

export enum Winner {
    HOME_TEAM = 'HOME_TEAM',
    AWAY_TEAM = 'AWAY_TEAM',
}
