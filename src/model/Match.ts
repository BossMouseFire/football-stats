import { TableTeam } from './TableTeam';
import { MatchDto, Status } from '../dto/MatchDto';
import { Season } from './Season';
import { Score } from './Score';

export class Match {
    id: number;
    status: keyof typeof Status;
    utcDate: string;
    season: Season;
    score: Score;
    homeTeam: TableTeam;
    awayTeam: TableTeam;

    constructor(dto: MatchDto) {
        this.id = dto.id;
        this.status = dto.status;
        this.utcDate = dto.utcDate;
        this.season = new Season(dto.season);
        this.score = new Score(dto.score);
        this.homeTeam = new TableTeam(dto.homeTeam);
        this.awayTeam = new TableTeam(dto.awayTeam);
    }
}
