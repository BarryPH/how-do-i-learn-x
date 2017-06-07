const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
	title: String,
	type: String,
	link: String,
	description: String,
});

const Resource = mongoose.model('Resource', ResourceSchema);

module.exports = ResourceSchema;
