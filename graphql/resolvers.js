const mongoose = require('mongoose');
const Resource = mongoose.model('Resource');
const faker = require('faker');

const resolvers = {
	Query: {
		resources: async () => {
			const resources = await Resource.find();

			return resources;
		},

		topics: () => {
			const fakeData = [];
			for (let i = 0; i < 5; i++) {
				fakeData.push(faker.lorem.word());
			}

			return fakeData;
		},
	},

	Mutation: {
		createResource: async (_, data) => {
			const resource = new Resource(data);
			await resource.save();

			return resource;
		}
	}
};

module.exports = resolvers;
