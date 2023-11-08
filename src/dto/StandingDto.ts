import { TableTeamStatDto } from './TableTeamStatDto';

export interface StandingDto {
    stage: string;
    type: string;
    table: TableTeamStatDto[];
}
