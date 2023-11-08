import React from 'react';
import { Layout } from 'antd';
import { Navbar } from '../../components';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

import styles from './PageLayout.module.scss';

export const PageLayout = () => (
    <Layout className={styles.layout}>
        <Navbar />
        <Content className={styles.content}>
            <Outlet />
        </Content>
    </Layout>
);
