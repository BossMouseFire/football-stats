import { TableTeam } from './TableTeam';
import { MatchDto } from '../dto/MatchDto';
import { Season } from './Season';

export class Match {
    id: number;
    status: string;
    utcDate: string;
    season: Season;
    score: Season;
    homeTeam: TableTeam;
    awayTeam: TableTeam;

    constructor(dto: MatchDto) {
        this.id = dto.id;
        this.status = dto.status;
        this.utcDate = dto.utcDate;
        this.season = new Season(dto.season);
        this.score = new Season(dto.score);
        this.homeTeam = new TableTeam(dto.homeTeam);
        this.awayTeam = new TableTeam(dto.awayTeam);
    }
}
