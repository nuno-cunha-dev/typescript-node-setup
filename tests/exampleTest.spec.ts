import LocationService from '@services/ExampleService';

test('get 123', () => {
  const s = new LocationService();
  expect(s.getExampleValue()).toEqual(123);
});
