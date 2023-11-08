import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Competition } from '../../model/Competition';
import { fetchCompetitions } from './competitionsCreator';

interface InitialStateCompetitions {
    isLoading: boolean;
    competitions: Competition[];
    filterCompetitions: Competition[];
    filterName: string;
}

const initialState: InitialStateCompetitions = {
    isLoading: false,
    competitions: [],
    filterCompetitions: [],
    filterName: '',
};

export const competitionsSlice = createSlice({
    name: 'competitions',
    initialState,
    reducers: {
        fetchCompleted: (state) => {
            state.isLoading = false;
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filterName = action.payload;

            if (!action.payload) {
                state.filterCompetitions = state.competitions;
            } else {
                const filterNameLower = state.filterName.toLowerCase();
                state.filterCompetitions = state.competitions.filter(
                    (item) =>
                        item.name.toLowerCase().indexOf(filterNameLower) !== -1,
                );
            }
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
            state.filterCompetitions = action.payload;
        },
    },
});
