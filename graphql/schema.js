const Schema = `
	type Resource {
		_id: String,
		title: String,
		topic: String,
		type: String,
		link: String,
		description: String,
	}

	type Query {
		resources(topic: String): [Resource],
		topics: [String],
	}

	type Mutation {
		createResource(
			title: String!,
			topic: String!,
			type: String!,
			link: String,
			description: String,
		): Resource,
	}
`;

module.exports = Schema;
