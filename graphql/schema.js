const Schema = `
	type Resource {
		_id: String,
		title: String,
		type: String,
		link: String,
		description: String,
	}

	type Query {
		resource(id: String): [Resource],
		types: [String],
	}
`;

module.exports = Schema;
