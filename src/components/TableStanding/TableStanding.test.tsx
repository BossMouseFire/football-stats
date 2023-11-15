import { TableStanding } from './TableStanding';
import { renderToJson } from '../../test/helpers/renderToJson';
import { standingsMock } from '../../mock/standing';

it('Table standing renders correctly', () => {
    const table = renderToJson(
        <TableStanding table={standingsMock.standings[0].table} />,
    );

    expect(table).toMatchSnapshot();
});

export {};
