import Ember from 'ember';

export default Ember.Component.extend({
	// TODO: diagnose scrolljump when you scoll down before pressing "add set"
	// TODO: figure out why #reps isn't highlighted fully on opening add modal first time for a superset
	latestSet: Ember.computed(function(){
		if (this.get('activeSuperset.sets.length') == 0) {
			if (this.get('activeSuperset.exercise.supersets.length') != 1){
				console.log('new superset, existing exercise');
				var count = this.get('activeSuperset.exercise.supersets.length');
				return {
					reps: this.get('activeSuperset.exercise.supersets').objectAt(count-2).get('sets.lastObject.reps'),
					weight: this.get('activeSuperset.exercise.supersets').objectAt(count-2).get('sets.lastObject.reps')
				};
			}
			else {
				console.log('brand new exercise');
				return {
					reps: null,
					weight: null
				};
			}
		}
		else {
			console.log('adding to existing set')
			return {
				reps: this.get('activeSuperset.sets.lastObject.reps'),
				weight: this.get('activeSuperset.sets.lastObject.weight')
			};
		}
	}).property('activeSuperset'),

  initAddSet: function() {
  	let reps = this.get('latestSet.reps');
  	let weight = this.get('latestSet.weight');
    this.set('reps', reps);
    this.set('weight', weight);

    $('html, body').animate({
        scrollTop: ($("#reps").offset().top - $(window).height()/2)
    }, {
		duration: 200,
			complete: function(){
				$("#reps").focus();
			}
		});
  }.on('didInsertElement'),

	actions: {

		saveSet: function(superset) {
			var reps = this.reps;
			var weight = this.weight;
			this.sendAction("saveSet", superset, reps, weight);
			$('html, body').animate({
	        scrollTop: ($("#reps").offset().top - $(window).height()/2)
	    }, 100);
		},

		cancelAdd: function() {
			this.sendAction('cancelAdd');
		}
	}
});
