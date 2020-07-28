import * as interfacesIndex from '../../interfaces/index';

describe('Interfaces Index file', () => {
  it('Remains Unchanged', () => {
    expect(interfacesIndex).toMatchSnapshot();
  });
});
