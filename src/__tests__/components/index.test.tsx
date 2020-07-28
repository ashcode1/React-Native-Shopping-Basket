import * as index from '../../components/index';

describe('Components Index file', () => {
  it('Remains Unchanged', () => {
    expect(index).toMatchSnapshot();
  });
});
