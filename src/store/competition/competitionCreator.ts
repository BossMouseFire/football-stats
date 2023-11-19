import { createAsyncThunk } from '@reduxjs/toolkit';
import { competitionSlice } from './competitionSlice';
import { CompetitionApi } from '../../api';
import {
    CompetitionMatchesProps,
    CompetitionStandingProps,
    CompetitionTeamsProps,
} from './competitionType';
import { RootState } from '../index';
import { getError } from '../../errors/getError';
import { Dayjs } from 'dayjs';

export const fetchCompetition = createAsyncThunk(
    'competition/get',
    async (id: string, { rejectWithValue, dispatch }) => {
        try {
            return await CompetitionApi.getCompetition(id);
        } catch (error) {
            return rejectWithValue(getError(error));
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
            return rejectWithValue(getError(error));
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
            return rejectWithValue(getError(error));
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
            return rejectWithValue(getError(error));
        } finally {
            dispatch(competitionSlice.actions.fetchCompetitionTeamsCompleted());
        }
    },
);

export const setRange = createAsyncThunk(
    'competition/setRage',
    async (
        { dateFrom, dateTo }: { dateFrom: Dayjs | null; dateTo: Dayjs | null },
        { rejectWithValue, dispatch, getState },
    ) => {
        dispatch(competitionSlice.actions.setDateFrom(dateFrom));
        dispatch(competitionSlice.actions.setDateTo(dateTo));

        const state = getState() as RootState;

        const competition = state.competitionReducer.competition;

        if (competition) {
            const id = String(competition.id);
            const season = state.competitionReducer.season;
            dispatch(
                fetchCompetitionMatches({
                    id,
                    season,
                    dateFrom: dateFrom?.format('YYYY-MM-DD'),
                    dateTo: dateTo?.format('YYYY-MM-DD'),
                }),
            );
        }
    },
);

export const setSeason = createAsyncThunk(
    'competition/setSeason',
    async (season: string, { rejectWithValue, dispatch, getState }) => {
        dispatch(competitionSlice.actions.setDateFrom(null));
        dispatch(competitionSlice.actions.setDateTo(null));
        dispatch(competitionSlice.actions.setSeason(season));

        const state = getState() as RootState;

        const competition = state.competitionReducer.competition;

        if (competition) {
            const id = String(competition.id);

            await Promise.all([
                dispatch(
                    fetchCompetitionStandings({
                        id,
                        season,
                    }),
                ),
                dispatch(
                    fetchCompetitionTeams({
                        id,
                        season,
                    }),
                ),
                dispatch(
                    fetchCompetitionMatches({
                        id,
                        season,
                    }),
                ),
            ]);
        }
    },
);
