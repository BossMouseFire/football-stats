import { TableTeamDto } from '../dto/TableTeamDto';

export class TableTeam {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;

    constructor(dto: TableTeamDto) {
        this.id = dto.id;
        this.name = dto.name;
        this.shortName = dto.shortName;
        this.tla = dto.tla;
        this.crest = dto.crest;
    }
}
