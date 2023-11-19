import { CompetitionDto } from '../dto/CompetitionDto';
import { Area } from './Area';
import { Season } from './Season';

export class Competition {
    id: number;
    area?: Area | null = null;
    name: string | null;
    code: string | null;
    type: string | null;
    emblem?: string | null;
    plan?: string | null;
    currentSeason: Season;
    numberOfAvailableSeasons?: number | null;
    lastUpdated?: string | null;

    constructor(dto: CompetitionDto) {
        this.id = dto.id;
        if (dto.area) {
            this.area = new Area(dto.area);
        }
        this.name = dto.name;
        this.code = dto.code;
        this.type = dto.type;
        this.emblem = dto.emblem;
        this.plan = dto.plan;
        this.currentSeason = new Season(dto.currentSeason);
        this.numberOfAvailableSeasons = dto.numberOfAvailableSeasons;
        this.lastUpdated = dto.lastUpdated;
    }
}
