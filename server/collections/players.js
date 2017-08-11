Players.allow({
	insert: function (userId, doc) {
		return Players.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return Players.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return Players.userCanRemove(userId, doc);
	}
});

Players.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;
	doc.modifiedAt = doc.createdAt;
	doc.modifiedBy = doc.createdBy;

	
	if(!doc.createdBy) doc.createdBy = userId;
});

Players.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Players.before.upsert(function(userId, selector, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	/*BEFORE_UPSERT_CODE*/
});

Players.before.remove(function(userId, doc) {
	
});

Players.after.insert(function(userId, doc) {
	
});

Players.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Players.after.remove(function(userId, doc) {
	
});
