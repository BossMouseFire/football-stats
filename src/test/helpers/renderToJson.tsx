import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../store';
import React from 'react';

export const renderToJson = (
    component: React.ReactElement,
    isNeedProvider = false,
) => {
    if (isNeedProvider) {
        return renderer
            .create(<Provider store={store()}>{component}</Provider>)
            .toJSON();
    }
    return renderer.create(component).toJSON();
};
