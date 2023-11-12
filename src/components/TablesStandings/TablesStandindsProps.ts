import { Standing } from '../../model/Standing';
import { StandingType } from '../../dto/StandingDto';
import { ErrorData } from '../../errors/ErrorData';

export interface TablesStandingsProps {
    standings: Standing[];
    error?: ErrorData;
}

type LabelsStanding = {
    [key in StandingType]: string;
};

export const labelsStanding: LabelsStanding = {
    [StandingType.TOTAL]: 'Все матчи',
    [StandingType.HOME]: 'Домашние матчи',
    [StandingType.AWAY]: 'Выездные матчи',
};
