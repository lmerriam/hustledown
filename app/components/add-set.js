import Ember from 'ember';

export default Ember.Component.extend({
	becomeFocused: function() {
    this.$('#reps').focus();
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
