import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		newSession: function() {
			let newSession = this.get("store").createRecord('session', {
				timestamp: Date.now(),
				date: moment().format("MMMM DD")
			});
			newSession.save();
		},
		removeSession: function(session) {
			session.destroyRecord();
		},
		changeDate: function () {
		  console.log("blah!!!");
		}
	}
});
