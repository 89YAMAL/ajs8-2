import ErrorRepository from '../game';

test('получить по коду текст ошибки', () => {
  const error = new ErrorRepository();
  error.add(403, 'Forbidden');
  expect(error.translate(403)).toBe('Forbidden');
});

test('получить по коду текст ошибки', () => {
  const error = new ErrorRepository();
  expect(error.translate(303)).toBe('Unknown error');
});
