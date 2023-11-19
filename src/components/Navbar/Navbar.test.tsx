import { Navbar } from './Navbar';
import { renderToJson } from '../../test/helpers/renderToJson';

it('Navbar renders correctly', () => {
    const navbar = renderToJson(<Navbar />);

    expect(navbar).toMatchSnapshot();
});

export {};
