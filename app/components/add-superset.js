import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	actions: {
		newSuperset: function(workout) {
			let newSuperset = this.get("store").createRecord('superset', {
				timestamp: Date.now()
			});
			let newExercise = this.get("store").createRecord('exercise', {
				name: this.get("exerciseName"),
				supersets: [newSuperset]
			});
			debugger;
			workout.get('supersets').addObject(newSuperset);
			newExercise.save();
			newSuperset.save().then(function(){
				return workout.save();
			});
			this.set('exerciseName', '');
		}
	}
});
