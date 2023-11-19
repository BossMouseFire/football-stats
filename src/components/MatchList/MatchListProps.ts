import { Match } from '../../model/Match';
import { Status } from '../../dto/MatchDto';
import React from 'react';
import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';

export interface MatchListProps {
    dateFrom: Dayjs | null;
    dateTo: Dayjs | null;
    matches: Match[];
    getRangeMatches: (dates: RangeValue) => void;
}

export interface MatchProps {
    match: Match;
    className?: string;
}

type LabelsMatch = {
    [key in Status]: string;
};

export const labelsMatch: LabelsMatch = {
    [Status.SCHEDULED]: 'Запланировано',
    [Status.LIVE]: 'Прямой эфир',
    [Status.IN_PLAY]: 'В игре',
    [Status.PAUSED]: 'Пауза',
    [Status.FINISHED]: 'Завершено',
    [Status.POSTPONED]: 'Отложено',
    [Status.SUSPENDED]: 'Приостановлено',
    [Status.CANCELLED]: 'Отменено',
};

export type RangeValue = Parameters<
    NonNullable<React.ComponentProps<typeof DatePicker.RangePicker>['onChange']>
>[0];
