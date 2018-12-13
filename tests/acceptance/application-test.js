import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import text from 'ember-text-test-helper';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(
      text('.whitespace'),
      'one two three',
      'trims, collapses, and removes newlines'
    );

    assert.equal(
      text('.array'),
      'one two three four',
      'selects and trims multiple'
    );

    assert.equal(
      text(document.querySelector('.whitespace')),
      'one two three',
      'wraps already selected element'
    );

    assert.equal(
      text(document.querySelectorAll('.array')),
      'one two three four',
      'wraps already selected array'
    );
  });
});
