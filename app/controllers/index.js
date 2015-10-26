import Ember from 'ember';

export default Ember.Controller.extend({
	activeSuperset: null,
	actions: {

		newWorkout: function() {
			let newWorkout = this.get("store").createRecord('workout', {
				timestamp: Date.now(),
				date: moment().format("MMMM DD")
			});
			newWorkout.save().then(function(){
				$(".add-exercise-input").last().focus();
			});
		},

		removeWorkout: function(workout) {
			workout.destroyRecord();
		},

		newSuperset: function(workout, exerciseName) {
			let newSuperset = this.get("store").createRecord('superset', {
				timestamp: Date.now()
			});

			let existingExercise = this.model.exercises.findBy('name', exerciseName);

			if (typeof existingExercise !== "undefined") {
				existingExercise.get('supersets').addObject(newSuperset);
				existingExercise.save();
			}
			else {
				let newExercise = this.get("store").createRecord('exercise', {
					name: exerciseName,
					supersets: [newSuperset]
				});
				newExercise.save();
			}

			workout.get('supersets').addObject(newSuperset);
			newSuperset.save().then(function(){
				return workout.save();
			});
			this.set('activeSuperset', newSuperset);
			$("#reps").focus();
		},

		addSet: function(supersetID) {
			this.set('activeSuperset', supersetID);
			$("#reps").focus();
		},
		saveSet: function(superset, reps, weight) {
			let newSet = this.get("store").createRecord('set', {
				reps: reps,
				weight: weight
			});
			superset.get('sets').addObject(newSet);
			newSet.save().then(function(){
				return superset.save();
			});
			$('#reps').select();
		},
		updateSet: function(set) {
			let reps=set.get('reps');
			let weight=set.get('weight');
			this.get('store').find('set', set.id).then(function() {
				set.set('reps', reps);
				set.set('weight', weight);
				set.save();
			})
		},
		cancelAdd: function() {
			this.set('activeSuperset', null);
		},
		removeSet: function(set) {
			set.destroyRecord();
		},
		removeSuperset: function(superset) {
			superset.destroyRecord();
		}
	}
});
