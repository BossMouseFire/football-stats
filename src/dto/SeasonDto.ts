import { TeamDto } from './TeamDto';

export interface SeasonDto {
    id: number;
    startDate: string | null;
    endDate: string | null;
    currentMatchday: number | null;
    winner: null | TeamDto;
}
