import React from 'react';
import { Result } from 'antd';
import { ErrorBlockProps } from './ErrorBlockProps';

export const ErrorBlock: React.FC<ErrorBlockProps> = ({ error }) => (
    <Result status='error' title='Произошла ошибка' subTitle={error.message} />
);
