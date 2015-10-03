import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return {
			workouts: this.store.findAll('workout'),
			exercises: this.store.findAll('exercise'),
			supersets: this.store.findAll('superset'),
			sets: this.store.findAll('set')
		}
	},

	afterModel: function(model) {
		
	}

});
