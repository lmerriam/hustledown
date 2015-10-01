import Ember from 'ember';

export default Ember.Component.extend({
	// store: Ember.inject.service(),
	// beFocused: function() {
	// 	console.log("fired becomeFocused");
 //    this.$('.add-exercise-input').focus();
 //  }.on('didInsertElement'),
	active: Ember.computed(function(){
		return this.get('superset') === this.get('activeSuperset')
	}).property('activeSuperset'),
	actions: {
		addSet: function() {
			let supersetID = this.get('superset');
			this.sendAction('addSet', supersetID);
		},
		cancelAdd: function() {
			this.sendAction('cancelAdd');
		},
		saveSet: function(superset, reps, weight) {
			this.sendAction('saveSet', superset, reps, weight);
		},
		updateSet: function(set) {
			this.sendAction("updateSet", set);
		},
		removeSet: function(set) {
			this.sendAction('removeSet', set);
		},
		removeSuperset: function(superset) {
			this.sendAction('removeSuperset', superset);
		}
	}
});
