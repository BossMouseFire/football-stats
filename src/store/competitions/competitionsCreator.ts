import { createAsyncThunk } from '@reduxjs/toolkit';
import { competitionsSlice } from './competitionsSlice';
import { CompetitionApi } from '../../api';
import { getError } from '../../errors/getError';

export const fetchCompetitions = createAsyncThunk(
    'competitions/getAll',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            return await CompetitionApi.getCompetitions();
        } catch (error) {
            return rejectWithValue(getError(error));
        } finally {
            dispatch(competitionsSlice.actions.fetchCompleted());
        }
    },
);
