import Ember from 'ember';

export default Ember.Route.extend({
	// TODO: route specific to an exercise, load in only the records for that exercise
	model() {
		return {
			workouts: this.store.findAll('workout'),
			exercises: this.store.findAll('exercise'),
			supersets: this.store.findAll('superset'),
			sets: this.store.findAll('set')
		};
	}

});
