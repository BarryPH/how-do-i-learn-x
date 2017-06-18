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


	// Next.js setup
	const dev = process.env.NODE_ENV !== 'production';
	const nextApp = next({ dev });
	const handle = nextApp.getRequestHandler()

	await nextApp.prepare();


	// Express.js setup
	const app = express();

	//app.use(bodyParser.urlencoded({ extended: true }));
	//app.use(bodyParser.text({ type: 'application/graphql' }));


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

	// Dynamic Next.js routes
	app.get('/:topic', (req, res) => {
		const url = '/topic';
		const queryParams = { topic: req.params.topic };
		nextApp.render(req, res, url, queryParams);
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
