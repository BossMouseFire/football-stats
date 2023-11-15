import { MemoryRouter } from 'react-router-dom';
import { Root } from '../../routes/Root';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
export const renderTestApp = (
    component: React.ReactElement,
    initialRoute = '/',
) => {
    return render(
        <Provider store={store()}>
            <MemoryRouter initialEntries={[initialRoute]}>
                <Root />
                {component}
            </MemoryRouter>
        </Provider>,
    );
};
