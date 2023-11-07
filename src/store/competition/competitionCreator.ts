import { createAsyncThunk } from '@reduxjs/toolkit';
import { competitionSlice } from './competitionSlice';
import { CompetitionApi } from '../../api';

export const fetchCompetitions = createAsyncThunk(
    'competition/getAll',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            return await CompetitionApi.getCompetitions();
        } catch (error) {
            // return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(competitionSlice.actions.fetchCompleted());
        }
    },
);
