import DS from 'ember-data';

export default DS.Model.extend({
	timestamp: DS.attr('number'),
	date: DS.attr('string'),
  supersets: DS.hasMany('supersets', {async: true})
});
