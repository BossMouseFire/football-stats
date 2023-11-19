import { SearchCompetition } from './SearchCompetition';
import { renderToJson } from '../../test/helpers/renderToJson';

it('SearchCompetition renders correctly', () => {
    const search = renderToJson(<SearchCompetition />, true);

    expect(search).toMatchSnapshot();
});

export {};
