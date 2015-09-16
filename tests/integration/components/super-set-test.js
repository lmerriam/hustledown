import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('super-set', 'Integration | Component | super set', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{super-set}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#super-set}}
      template block text
    {{/super-set}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
