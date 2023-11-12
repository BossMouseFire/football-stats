import { Time } from './Time';
import { ScoreDto, Winner } from '../dto/ScoreDto';

export class Score {
    duration: string | null;
    winner: keyof typeof Winner | null;
    fullTime: Time;
    halfTime: Time;

    constructor(dto: ScoreDto) {
        this.duration = dto.duration;
        this.winner = dto.winner;
        this.fullTime = new Time(dto.fullTime);
        this.halfTime = new Time(dto.halfTime);
    }
}
