import { createAsyncThunk } from '@reduxjs/toolkit';
import { competitionsSlice } from './competitionsSlice';
import { CompetitionApi } from '../../api';

export const fetchCompetitions = createAsyncThunk(
    'competitions/getAll',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            return await CompetitionApi.getCompetitions();
        } catch (error) {
            // return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(competitionsSlice.actions.fetchCompleted());
        }
    },
);
