import { Competition } from '../../model/Competition';
import { ErrorData } from '../../errors/ErrorData';

export interface InitialStateCompetitions {
    isLoading: boolean;
    competitions: Competition[];
    filterCompetitions: Competition[];
    filterName: string;
    error: ErrorData | undefined;
}
