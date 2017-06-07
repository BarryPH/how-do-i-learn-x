const {
	GraphQLObjectType,
	GraphQLSchema,
} = require('graphql');

const mutations = require('./mutations/index.js');
const queries = require('./queries/index.js');

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: queries,
	}),
	/*
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: mutations,
	}),
	*/
});
