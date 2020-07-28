import * as colors from '../../interfaces/index';

describe('Colors file', () => {
  it('Remains Unchanged', () => {
    expect(colors).toMatchSnapshot();
  });
});
