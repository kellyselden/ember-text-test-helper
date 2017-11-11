import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import text from 'ember-text-test-helper';

moduleForAcceptance('Acceptance | application');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(
      text('.whitespace'),
      'hello there',
      'trims, collapses, and removes newlines'
    );

    assert.equal(
      text('.array'),
      'one two',
      'selects and trims multiple'
    );

    assert.equal(
      text(document.querySelector('.whitespace')),
      'hello there',
      'wraps already selected element'
    );

    assert.equal(
      text(document.querySelectorAll('.array')),
      'one two',
      'wraps already selected array'
    );
  });
});
