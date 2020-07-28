const axios = {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          id: 1,
          name: 'testNameBlack',
          img: 'img',
          colour: 'Black',
          price: 11,
        },
        {
          id: 2,
          name: 'testNameRed',
          img: 'img',
          colour: 'Red',
          price: 22,
        },
        {
          id: 3,
          name: 'testNameBlackTwo',
          img: 'img',
          colour: 'Black',
          price: 33,
        },
        {
          id: 4,
          name: 'testNameStone',
          img: 'img',
          colour: 'Stone',
          price: 44,
        },
      ],
    }),
  ),
  defaults: { headers: { common: {} } },
};
export default axios;
