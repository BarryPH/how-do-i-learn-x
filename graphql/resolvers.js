const faker = require('faker');

const resolvers = {
	Query : {
		resources: () => {
			const fakeData = [];
			for (let i = 0; i < 10; i++) {
				fakeData.push({
					_id: faker.random.uuid(),
					title: faker.lorem.words(),
					topic: faker.lorem.word(),
					type: faker.random.arrayElement(['book', 'video', 'article', 'other']),
					link: `http://${faker.lorem.word()}.com`,
					description: faker.lorem.paragraph(),
				});
			};

			return fakeData;
		},

		topics: () => {
			const fakeData = [];
			for (let i = 0; i < 5; i++) {
				fakeData.push(faker.lorem.word());
			}

			return fakeData;
		},
	},
};

module.exports = resolvers;
