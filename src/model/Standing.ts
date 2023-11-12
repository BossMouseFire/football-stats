import { StandingDto, StandingType } from '../dto/StandingDto';
import { TableTeamStat } from './TableTeamStat';

export class Standing {
    stage: string;
    type: keyof typeof StandingType;
    table: TableTeamStat[];

    constructor(dto: StandingDto) {
        this.stage = dto.stage;
        this.type = dto.type;
        this.table = dto.table.map((item) => new TableTeamStat(item));
    }
}
