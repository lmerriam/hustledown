import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return {
			sessions: this.store.findAll('session'),
			exercises: this.store.findAll('exercise')
			// supersets: this.store.findAll('superset'),
			// sets: this.store.findAll('set')
		}
	}
});
