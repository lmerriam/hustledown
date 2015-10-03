import Ember from 'ember';

export default Ember.Controller.extend({

	reps: function(){
		return this.get("model").sets.mapBy('reps');
	}.property('model.sets.@each.reps'),

	weight: function(){
		return this.get("model").sets.mapBy('weight');
	}.property('model.sets.@each.weight'),

	graphData: function(){
		return {
			columns: [
				this.get('reps'),
				this.get('weight')
			]
		}
	}.property('weight', 'reps'),

	actions: {
		updateData: function(){
			return console.log(this.get('graphData'));
		}
	}
});
