import DS from 'ember-data';

export default DS.Model.extend({
  reps: DS.attr('number'),
  weight: DS.attr('number'),
  superset: DS.belongsTo('superset')
});
