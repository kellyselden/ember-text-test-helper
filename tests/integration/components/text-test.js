import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import text from 'ember-text-test-helper';

module('Integration | Component | text', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <span class="whitespace">

        one
        two

        three </span>

      <span class="array">

        one

      </span>
      <span class="array">

        two

      <span>three</span>
      <span>four</span>
      </span>
    `);

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
