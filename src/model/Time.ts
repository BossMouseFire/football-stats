import { TimeDto } from '../dto/TimeDto';

export class Time {
    homeTeam: number | null;
    awayTeam: number | null;

    constructor(dto: TimeDto) {
        this.homeTeam = dto.homeTeam;
        this.awayTeam = dto.awayTeam;
    }
}
