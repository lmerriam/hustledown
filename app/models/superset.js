import DS from 'ember-data';

export default DS.Model.extend({
	timestamp: DS.attr('number'),
	workout: DS.belongsTo('workout'),
	exercise: DS.belongsTo('exercise'),
  sets: DS.hasMany('set', {async: true})
});
