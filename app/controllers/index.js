import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		newWorkout: function() {
			let newWorkout = this.get("store").createRecord('workout', {
				timestamp: Date.now(),
				date: moment().format("MMMM DD")
			});
			newWorkout.save();
		},
		removeWorkout: function(workout) {
			workout.destroyRecord();
		},
		changeDate: function () {
		  console.log("blah!!!");
		}
	}
});
