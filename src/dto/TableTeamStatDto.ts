import { TableTeamDto } from './TableTeamDto';

export interface TableTeamStatDto {
    position: number;
    team: TableTeamDto;
    playedGames: number;
    form: string;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}
