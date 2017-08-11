Meteor.methods({
	"playersInsert": function(data) {
		if(!Players.userCanInsert(this.userId, data)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		return Players.insert(data);
	},

	"playersUpdate": function(id, data) {
		var doc = Players.findOne({ _id: id });
		if(!Players.userCanUpdate(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Players.update({ _id: id }, { $set: data });
	},

	"playersRemove": function(id) {
		var doc = Players.findOne({ _id: id });
		if(!Players.userCanRemove(this.userId, doc)) {
			throw new Meteor.Error(403, "Forbidden.");
		}

		Players.remove({ _id: id });
	}
});
