import { createAsyncThunk } from '@reduxjs/toolkit';
import { teamSlice } from './teamSlice';
import { TeamApi } from '../../api';
import { TeamMatchesProps } from './teamType';
import { getError } from '../../errors/getError';
import { RootState } from '../index';
import { Dayjs } from 'dayjs';
import { competitionSlice } from '../competition/competitionSlice';
import { fetchCompetitionMatches } from '../competition/competitionCreator';

export const fetchTeam = createAsyncThunk(
    'team/get',
    async (id: string, { rejectWithValue, dispatch }) => {
        try {
            return await TeamApi.getTeam(id);
        } catch (error) {
            return rejectWithValue(getError(error));
        } finally {
            dispatch(teamSlice.actions.fetchTeamCompleted());
        }
    },
);

export const fetchTeamMatches = createAsyncThunk(
    'team/getMatches',
    async (
        { id, venue, dateFrom, dateTo }: TeamMatchesProps,
        { rejectWithValue, dispatch },
    ) => {
        try {
            return await TeamApi.getTeamMatches(id, {
                venue,
                dateFrom,
                dateTo,
            });
        } catch (error) {
            return rejectWithValue(getError(error));
        } finally {
            dispatch(teamSlice.actions.fetchTeamMatchesCompleted());
        }
    },
);

export const setRange = createAsyncThunk(
    'competition/setRage',
    async (
        { dateFrom, dateTo }: { dateFrom: Dayjs | null; dateTo: Dayjs | null },
        { rejectWithValue, dispatch, getState },
    ) => {
        dispatch(teamSlice.actions.setDateFrom(dateFrom));
        dispatch(teamSlice.actions.setDateTo(dateTo));

        const state = getState() as RootState;

        const team = state.teamReducer.team;

        if (team) {
            const id = String(team.id);
            const venue = state.teamReducer.venue;
            dispatch(
                fetchTeamMatches({
                    id,
                    venue,
                    dateFrom: dateFrom?.format('YYYY-MM-DD'),
                    dateTo: dateTo?.format('YYYY-MM-DD'),
                }),
            );
        }
    },
);
export const setVenue = createAsyncThunk(
    'competition/setVenue',
    async (venue: 'HOME' | 'AWAY', { rejectWithValue, dispatch, getState }) => {
        const state = getState() as RootState;

        const team = state.teamReducer.team;

        if (team) {
            const id = String(team.id);

            await dispatch(fetchTeamMatches({ id, venue }));
        }
    },
);
