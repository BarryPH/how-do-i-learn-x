const Schema = `
	type Resource {
		_id: String,
		title: String,
		type: String,
		topic: String,
		link: String,
		description: String,
	}

	type Query {
		resources(topic: String): [Resource],
		topics: [String],
	}
`;

module.exports = Schema;
