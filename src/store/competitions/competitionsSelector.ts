import { RootState } from '../index';

export const competitionsSelector = (state: RootState) =>
    state.competitionsReducer;
