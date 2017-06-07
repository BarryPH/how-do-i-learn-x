const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { parse } = require('url');
const next = require('next');
const { graphql } = require('graphql');
const graphqlHTTP = require('express-graphql');

const schema = require('./graphql/index.js');

async function start() {
	mongoose.connect('mongodb://localhost:27017/local');


	const dev = process.env.NODE_ENV !== 'production';
	const nextApp = next({ dev }); const handle = nextApp.getRequestHandler()

	await nextApp.prepare();


	const app = express();

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.text({ type: 'application/graphql' }));

	app.use('/graphql', graphqlHTTP((req) => ({
		schema,
		graphiql: dev,
	})));

	app.get('*', (req, res) => {
		return handle(req, res)
	});

	const port = process.env.PORT || 3000;
	await app.listen(port);
	console.log(`> Running on http://localhost:${port}`);
}

start();
