import { TimeDto } from './TimeDto';

export interface ScoreDto {
    winner: string;
    fullTime: TimeDto;
    penalties: TimeDto;
}
