import Ember from 'ember';

export default Ember.Controller.extend({
	paddingOptions: {
		top: 0,
		bottom: 0
	},
	zoomOptions: {
		enabled: true
	},
	axisOptions:function() {
		return {
			y2: {
				show: true
			},
			x: {
	      // type: 'category',
	      categories: this.get('data.dates')
	    }
	  }
	}.property('data'),

	// Get exercise from ember-selectize, defaults to first exercise record
	selectedExercise: function(){
		return this.get('model.exercises.firstObject');
	}.property('model.exercises.@each.name'),


	// Get array of reps filtered by selectedExercise
	data: function(){
		var selectedExercise = this.get('selectedExercise');
		var filterSets = this.get('model.sets').filter(function(set, index, enumerable){
			let exercise = set.get('superset.exercise');
	    return exercise == selectedExercise;
	  });

		let reps = filterSets.mapBy('reps');
		let weight = filterSets.mapBy('weight');
		let dates = filterSets.mapBy('superset.workout.date');

		reps.unshift('Reps');
		weight.unshift('Weight');

		return {
			reps: reps,
			weight: weight,
			dates: dates
		}
	}.property('model.sets.@each.reps', 'selectedExercise.id'),


	repData: function(){
		return {
			columns: [this.get('data.reps'), this.get('data.weight')],
			axes: {
        Reps: 'y',
        Weight: 'y2'
      },
			types:{
				Reps:'bar',
				Weight: 'spline'
			},
			unload: true
		}
	}.property('data'),

});
