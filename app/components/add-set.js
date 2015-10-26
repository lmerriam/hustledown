import Ember from 'ember';

export default Ember.Component.extend({
	// TODO: make new supersets with existing articles autofill (maybe return latestset to earlier)
	latestSet: Ember.computed(function(){
		return {
			reps: this.get('activeSuperset.exercise.supersets.lastObject.sets.lastObject.reps'),
			weight: this.get('activeSuperset.exercise.supersets.lastObject.sets.lastObject.weight')
		}
	}).property('activeSuperset'),

  initAddSet: function() {
  	let reps = this.get('latestSet.reps');
  	let weight = this.get('latestSet.weight');
    this.set('reps', reps);
    this.set('weight', weight);
    this.$('#reps').select();
  }.on('didInsertElement'),

	actions: {

		saveSet: function(superset) {
			var reps = this.reps;
			var weight = this.weight;
			this.sendAction("saveSet", superset, reps, weight);
			$('#reps').focus();
		},

		cancelAdd: function() {
			this.sendAction('cancelAdd');
		}
	}
});
