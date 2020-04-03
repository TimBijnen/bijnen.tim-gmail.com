import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | jobs', function(hooks) {
  setupTest(hooks);

  test('it loads data', function(assert) {
    let route = this.owner.lookup('route:jobs');
    assert.equal(route.model(), "jobs");
  });
});
