/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-text-test-helper',

  treeForAddonTestSupport(tree) {
    const Funnel = require('broccoli-funnel');

    let namespacedTree = new Funnel(tree, {
      srcDir: '/',
      destDir: `/${this.moduleName()}`,
      annotation: `Addon#treeForTestSupport (${this.name})`,
    });

    return this.preprocessJs(namespacedTree, '/', this.name, {
      registry: this.registry,
    });
  }
};
