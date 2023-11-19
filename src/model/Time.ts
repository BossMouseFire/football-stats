import { TimeDto } from '../dto/TimeDto';

export class Time {
    home: number | null;
    away: number | null;

    constructor(dto: TimeDto) {
        this.home = dto.home;
        this.away = dto.away;
    }
}
