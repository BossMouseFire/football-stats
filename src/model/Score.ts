import { Time } from './Time';
import { ScoreDto } from '../dto/ScoreDto';

export class Score {
    winner: string;
    fullTime: Time;
    penalties: Time;

    constructor(dto: ScoreDto) {
        this.winner = dto.winner;
        this.fullTime = new Time(dto.fullTime);
        this.penalties = new Time(dto.penalties);
    }
}
