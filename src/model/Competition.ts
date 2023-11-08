import { CompetitionDto } from '../dto/CompetitionDto';
import { Area } from './Area';
import { Season } from './Season';

export class Competition {
    id: number;
    area: Area;
    name: string;
    code: string;
    type: string;
    emblem: string;
    plan: string;
    currentSeason: Season;
    numberOfAvailableSeasons: number;
    lastUpdated: string;

    constructor(dto: CompetitionDto) {
        this.id = dto.id;
        this.area = new Area(dto.area);
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
