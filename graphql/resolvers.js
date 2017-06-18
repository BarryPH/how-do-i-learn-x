const faker = require('faker');

const resolvers = {
	Query : {
		resource: () => {
			const fakeData = [{
				_id: faker.random.uuid(),
				title: faker.lorem.words(),
				type: faker.lorem.word(),
				link: `http://${faker.lorem.word()}.com`,
				description: faker.lorem.paragraph(),
			}];

			console.log('Fake:', fakeData);
			return fakeData;
		},

		types: () => {
			const fakeData = [];
			for (let i = 0; i < 5; i++) {
				fakeData[i] = faker.lorem.word();
			}

			return fakeData;
		},
	},
};

module.exports = resolvers;
