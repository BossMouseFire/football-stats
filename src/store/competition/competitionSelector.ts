import { RootState } from '../index';

export const competitionSelector = (state: RootState) =>
    state.competitionReducer;
