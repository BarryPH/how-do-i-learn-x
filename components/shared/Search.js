import React from 'react';
import gql from 'graphql-tag';

import apollo from '../../lib/apollo.js';

import {
	Form,
	Input,
} from './Form.js';

const query = gql`{
	topics
}`;

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.handleInput = this.handleInput.bind(this);

		this.state = {
			topics: [],
			searchValue: '',
		};
	}

	async componentDidMount() {
		const { data: { topics } } = await apollo.query({ query });
		this.setState({ topics });
	}

	handleInput(event) {
		this.setState({ searchValue: event.target.value });
	}

	render() {
		return (
			<Form method='GET' action={'/' + this.state.searchValue } {...this.props}>
				<Input noSpacing placeholder='How do I learn...' list='topics' onChange={this.handleInput} />

				<datalist id='topics'>
					{this.state.topics.map((type, i) =>
						<option key={i} value={type} />
					)}
				</datalist>
			</Form>
		)
	}
}

export default Search;
