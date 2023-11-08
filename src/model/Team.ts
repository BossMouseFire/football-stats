import { TeamDto } from '../dto/TeamDto';

export class Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: string;
    clubColors: string;
    venue: string;

    constructor(dto: TeamDto) {
        this.id = dto.id;
        this.name = dto.name;
        this.shortName = dto.shortName;
        this.tla = dto.tla;
        this.crest = dto.crest;
        this.address = dto.address;
        this.website = dto.website;
        this.founded = dto.founded;
        this.clubColors = dto.clubColors;
        this.venue = dto.venue;
    }
}
