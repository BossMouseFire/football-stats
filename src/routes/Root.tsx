import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './constants';
import { Spin } from 'antd';

const CompetitionsPage = lazy(
    () => import('../pages/Competitions/Competitions'),
);

export const Root = () => (
    <Suspense fallback={<Spin />}>
        <Routes>
            <Route path={routes.competitions} element={<CompetitionsPage />} />
        </Routes>
    </Suspense>
);
