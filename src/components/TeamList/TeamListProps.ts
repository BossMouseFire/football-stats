import { Team as TeamModel } from '../../model/Team';
import { ErrorData } from '../../errors/ErrorData';

export interface TeamListProps {
    teams: TeamModel[];
    error?: ErrorData;
}
