# ember-text-test-helper

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/ember-text-test-helper.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ember-text-test-helper.svg)](https://badge.fury.io/js/ember-text-test-helper)
[![Build Status](https://travis-ci.org/kellyselden/ember-text-test-helper.svg?branch=master)](https://travis-ci.org/kellyselden/ember-text-test-helper)
![Ember Version](https://embadge.io/v1/badge.svg?start=2.12.0)

`text` test helper that collapses spaces and newlines

## Installation

```sh
ember install ember-text-test-helper
```

## Usage

```hbs
<span class="whitespace">

  hello

  there

</span>
```

```js
import text from 'ember-text-test-helper';

assert.equal(text('.whitespace'), 'hello there');
```

You can select one or many elements and they will all be collapsed into a single string. The test helper takes an argument of a string selector, or already selected elements via `document.querySelector` and `document.querySelectorAll`.
