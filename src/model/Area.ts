import { AreaDto } from '../dto/AreaDto';

export class Area {
    id: number;
    name: string | null;
    code: string | null;
    flag: string | null;

    constructor(dto: AreaDto) {
        this.id = dto.id;
        this.name = dto.name;
        this.code = dto.code;
        this.flag = dto.flag;
    }
}
