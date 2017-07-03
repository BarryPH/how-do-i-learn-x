const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const next = require('next');
const { graphql } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const graphqlHTTP = require('express-graphql');


async function start() {
	// Mongoose
	mongoose.connect('mongodb://localhost:27017/howdoilearn');
	require('./models');


	// Next.js setup
	const dev = process.env.NODE_ENV !== 'production';
	const nextApp = next({ dev });
	const handle = nextApp.getRequestHandler()

	await nextApp.prepare();


	// Express.js setup
	const app = express();


	// Graphql setup
	const schema = require('./graphql/schema.js');
	const resolvers = require('./graphql/resolvers.js');

	const executableSchema = makeExecutableSchema({
		typeDefs: schema,
		resolvers,
	});


	// Routes
	app.use('/graphql', graphqlHTTP((req) => ({
		schema: executableSchema,
		graphiql: dev,
	})));

	app.get('/new', (req, res) => {
		nextApp.render(req, res, '/new');
	});

	// Dynamic Next.js routes
	app.get('/:topic', (req, res) => {
		const queryParams = { topic: req.params.topic };
		nextApp.render(req, res, '/topic', queryParams);
	});

	app.get('*', (req, res) => {
		return handle(req, res)
	});


	// Start server
	const port = process.env.PORT || 3000;
	await app.listen(port);
	console.log(`> Running on http://localhost:${port}`);
}

start();
