import { createAsyncThunk } from '@reduxjs/toolkit';
import { competitionSlice } from './competitionSlice';
import { CompetitionApi } from '../../api';
import {
    CompetitionMatchesProps,
    CompetitionStandingProps,
    CompetitionTeamsProps,
    SetSeasonProps,
} from './competitionType';

export const fetchCompetition = createAsyncThunk(
    'competition/get',
    async (id: number, { rejectWithValue, dispatch }) => {
        try {
            return await CompetitionApi.getCompetition(id);
        } catch (error) {
            // return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(competitionSlice.actions.fetchCompetitionCompleted());
        }
    },
);

export const fetchCompetitionStandings = createAsyncThunk(
    'competition/getStanding',
    async (
        { id, season }: CompetitionStandingProps,
        { rejectWithValue, dispatch },
    ) => {
        try {
            return await CompetitionApi.getCompetitionStanding(id, season);
        } catch (error) {
            // return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(
                competitionSlice.actions.fetchCompetitionStandingCompleted(),
            );
        }
    },
);

export const fetchCompetitionMatches = createAsyncThunk(
    'competition/getMatches',
    async (
        { id, season, dateFrom, dateTo }: CompetitionMatchesProps,
        { rejectWithValue, dispatch },
    ) => {
        try {
            return await CompetitionApi.getCompetitionMatches(id, {
                season,
                dateFrom,
                dateTo,
            });
        } catch (error) {
            // return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(
                competitionSlice.actions.fetchCompetitionMatchesCompleted(),
            );
        }
    },
);

export const fetchCompetitionTeams = createAsyncThunk(
    'competition/getTeams',
    async (
        { id, season }: CompetitionTeamsProps,
        { rejectWithValue, dispatch },
    ) => {
        try {
            return await CompetitionApi.getCompetitionTeams(id, season);
        } catch (error) {
            // return rejectWithValue(cast<AxiosError>(error).response?.data);
        } finally {
            dispatch(competitionSlice.actions.fetchCompetitionTeamsCompleted());
        }
    },
);

// export const setSeason = createAsyncThunk(
//     'competition/setSeason',
//     async ({ season }: SetSeasonProps, { rejectWithValue, dispatch }) => {
//         dispatch(competitionSlice.actions.setSeason(season));
//     },
// );
