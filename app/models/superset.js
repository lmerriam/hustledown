import DS from 'ember-data';

export default DS.Model.extend({
	timestamp: DS.attr('number'),
	session: DS.belongsTo('session'),
	exercise: DS.belongsTo('exercise'),
  sets: DS.hasMany('set', {async: true})
});
