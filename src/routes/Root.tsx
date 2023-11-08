import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './constants';
import { Spin } from 'antd';
import { PageLayout } from '../layout/PageLayout/PageLayout';

const CompetitionsPage = lazy(
    () => import('../pages/Competitions/Competitions'),
);

const CompetitionPage = lazy(() => import('../pages/Competition/Competition'));

export const Root = () => (
    <Suspense fallback={<Spin />}>
        <Routes>
            <Route path={routes.competitions} element={<CompetitionsPage />} />
            <Route element={<PageLayout />}>
                <Route
                    path={routes.competition}
                    element={<CompetitionPage />}
                />
            </Route>
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    </Suspense>
);
