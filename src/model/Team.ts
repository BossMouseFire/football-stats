import { TeamDto } from '../dto/TeamDto';
import { Coach } from './Coach';
import { Player } from './Player';

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
    coach?: Coach;
    squad?: Player[];

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

        if (dto.coach) {
            this.coach = new Coach(dto.coach);
        }

        if (dto.squad) {
            this.squad = dto.squad.map((item) => new Player(item));
        }
    }
}
