import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Competition } from '../../model/Competition';
import { fetchCompetitions } from './competitionCreator';

interface InitialStateFeedback {
    isLoading: boolean;
    competitions: Competition[];
}

const initialState: InitialStateFeedback = {
    isLoading: false,
    competitions: [],
};

export const competitionSlice = createSlice({
    name: 'competition',
    initialState,
    reducers: {
        fetchCompleted: (state) => {
            state.isLoading = false;
        },
    },
    extraReducers: {
        [fetchCompetitions.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCompetitions.fulfilled.type]: (
            state,
            action: PayloadAction<Competition[]>,
        ) => {
            state.competitions = action.payload;
        },
    },
});
