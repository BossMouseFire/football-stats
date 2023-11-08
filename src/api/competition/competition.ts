import api from '../config';
import { CompetitionsResponse } from './types';
import { Competition } from '../../model/Competition';

export class CompetitionApi {
    public static async getCompetitions(): Promise<Competition[]> {
        const data = await api.get<CompetitionsResponse>('/competitions');

        if (data) {
            return data.competitions;
        }
        return [];
    }
}
