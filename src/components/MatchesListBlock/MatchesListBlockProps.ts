import { ErrorData } from '../../errors/ErrorData';
import { Match } from '../../model/Match';
import { RangeValue } from '../MatchList/MatchListProps';
import { Dayjs } from 'dayjs';

export interface MatchesListBlockProps {
    isLoading?: boolean;
    error?: ErrorData;
    matches: Match[];
    getRangeMatches: (dates: RangeValue) => void;
    dateFrom: Dayjs | null;
    dateTo: Dayjs | null;
}
