import { SeasonDto } from './SeasonDto';
import { AreaDto } from './AreaDto';

export interface CompetitionDto {
    id: number;
    area: AreaDto;
    name: string;
    code: string;
    type: string;
    emblem: string;
    plan: string;
    currentSeason: SeasonDto;
    numberOfAvailableSeasons: number;
    lastUpdated: string;
}
