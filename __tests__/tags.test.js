import { createUnpairedTag, createPairedTag } from '../src/tags';

test('renders unpaired tags', async () => {
  const withAttrs = createUnpairedTag('div', { class: 'container', 'data-test': 'test-me' });
  expect(withAttrs.toString()).toEqual('<div class=container data-test=test-me />');

  const withoutAttrs = createUnpairedTag('span');
  expect(withoutAttrs.toString()).toEqual('<span />');
});

test('renders paired tags', async () => {
  const withAttrs = createPairedTag(
    'div',
    { class: 'container', 'data-test': 'test-me' },
    'hi',
  );
  expect(withAttrs.toString()).toEqual('<div class=container data-test=test-me>hi</div>');

  const withoutAttrs = createPairedTag('span');
  expect(withoutAttrs.toString()).toEqual('<span></span>');
});
