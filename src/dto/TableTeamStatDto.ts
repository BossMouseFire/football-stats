import { TableTeamDto } from './TableTeamDto';

export interface TableTeamStatDto {
    position: number;
    team: TableTeamDto;
    playedGames: number;
    form: string | null;
    won: number | null;
    draw: number | null;
    lost: number | null;
    points: number | null;
    goalsFor: number | null;
    goalsAgainst: number | null;
    goalDifference: number | null;
}
