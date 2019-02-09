import { bin } from '../src';

test('fetches default ip successfully', async () => {
  const result = { city: 'Moscow', country: 'Russia', query: '123.123.123.123' };
  const fetchMock = () => ({ data: result });
  const returnResult = (location) => { expect(location).toEqual(result); };

  await bin([], { fetchURL: fetchMock, returnResult });
});
