import { SeasonDto } from './SeasonDto';
import { AreaDto } from './AreaDto';

export interface CompetitionDto {
    id: number;
    area?: AreaDto | null;
    name: string;
    code: string | null;
    type: string | null;
    emblem: string;
    plan?: string | null;
    currentSeason: SeasonDto;
    numberOfAvailableSeasons?: number | null;
    lastUpdated?: string | null;
}
