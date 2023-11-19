import { MemoryRouter } from 'react-router-dom';
import { Root } from '../../routes/Root';
import { render } from '@testing-library/react';
import React from 'react';
export const renderWithRouter = (
    component: React.ReactElement,
    initialRoute = '/',
) => {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <Root />
            {component}
        </MemoryRouter>,
    );
};
