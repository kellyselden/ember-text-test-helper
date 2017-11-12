import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import text from 'ember-text-test-helper';

moduleForAcceptance('Acceptance | application');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
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
