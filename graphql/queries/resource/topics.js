const faker = require('faker');
const {
	GraphQLList,
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} = require('graphql');

const resource = require('../../../models/resource.js');

module.exports = {
	type: new GraphQLList(new GraphQLObjectType({
		name: 'Resource',
		fields: {
			_id: {
				type: new GraphQLNonNull(GraphQLID),
			},
			title: {
				type: GraphQLString,
			},
			type: {
				type: GraphQLString,
			},
			link: {
				type: GraphQLString,
			},
			description: {
				type: GraphQLString,
			},
		},
	})),
	args: {},
	resolve(root, params, options) {
		return [{
			_id: faker.random.uuid(),
			title: faker.lorem.words(),
			type: faker.lorem.word(),
			link: `http://${faker.lorem.word()}.com`,
			description: faker.lorem.paragraph(),
		}];
		//return resource
		//.find()
		//.exec();
	},
};
