import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		newSuperset: function(workout) {
			let exerciseName = this.get('exerciseName');
			this.sendAction('action', workout, exerciseName);
			this.set('exerciseName', '');
		}
	}
});
