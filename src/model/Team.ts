import { TeamDto } from '../dto/TeamDto';

export class Team {
    id: number;
    name: string | null;
    shortName: string | null;
    tla: string | null;
    crest: string | null;
    address: string | null;
    website: string | null;
    founded: number | null;
    clubColors: string | null;
    venue: string | null;

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
