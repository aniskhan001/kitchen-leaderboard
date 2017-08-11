this.Players = new Mongo.Collection("players");

this.Players.userCanInsert = function(userId, doc) {
	return Users.isInRoles(userId, ["admin","user"]);
};

this.Players.userCanUpdate = function(userId, doc) {
	return userId && (doc.createdBy == userId || Users.isInRoles(userId, ["admin","user"]));
};

this.Players.userCanRemove = function(userId, doc) {
	return userId && (doc.createdBy == userId || Users.isInRoles(userId, ["admin"]));
};
