import { Match } from './Match';
import { renderToJson } from '../../test/helpers/renderToJson';
import { matchesMock } from '../../mock/match';

it('Match renders correctly', () => {
    const table = renderToJson(<Match match={matchesMock[0]} />);

    expect(table).toMatchSnapshot();
});

export {};
