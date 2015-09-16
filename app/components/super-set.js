import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	addingSet: false,
	actions: {
		addSet: function() {
			this.set("addingSet", true);
			$("#reps").focus();
		},
		cancelAdd: function() {
			this.set("addingSet", false);
		},
		saveSet: function(superset) {
			let newSet = this.get("store").createRecord('set', {
				reps: this.reps,
				weight: this.weight
			});
			superset.get('sets').addObject(newSet);
			newSet.save().then(function(){
				return superset.save();
			});
			$("#reps").select();
		},
		removeSet: function(set) {
			set.destroyRecord();
		},
		removeSuperset: function(superset) {
			superset.destroyRecord();
		}
	}
});
