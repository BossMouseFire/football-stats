import { TableTeamStatDto } from './TableTeamStatDto';

export interface StandingDto {
    stage: string;
    type: keyof typeof StandingType;
    table: TableTeamStatDto[];
}

export enum StandingType {
    TOTAL = 'TOTAL',
    HOME = 'HOME',
    AWAY = 'AWAY',
}
