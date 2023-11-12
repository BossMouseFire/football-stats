import { TableTeamStatDto } from '../dto/TableTeamStatDto';
import { TableTeam } from './TableTeam';

export class TableTeamStat {
    position: number;
    team: TableTeam;
    playedGames: number;
    form: string | null;
    won: number | null;
    draw: number | null;
    lost: number | null;
    points: number | null;
    goalsFor: number | null;
    goalsAgainst: number | null;
    goalDifference: number | null;

    constructor(dto: TableTeamStatDto) {
        this.position = dto.position;
        this.team = new TableTeam(dto.team);
        this.playedGames = dto.playedGames;
        this.form = dto.form;
        this.won = dto.won;
        this.draw = dto.draw;
        this.lost = dto.lost;
        this.points = dto.points;
        this.goalsFor = dto.goalsFor;
        this.goalsAgainst = dto.goalsAgainst;
        this.goalDifference = dto.goalDifference;
    }
}
