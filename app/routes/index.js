import Ember from 'ember';

export default Ember.Route.extend({
	// TODO: authentication and load in only user's records
	model() {
		return {
			workouts: this.store.findAll('workout'),
			exercises: this.store.findAll('exercise')
			// supersets: this.store.findAll('superset'),
			// sets: this.store.findAll('set')
		}
	}
});
