import React from 'react';

import {
	Form,
	Input,
} from './Form.js';

class Search extends React.Component {
	render() {
		return (
			<Form {...this.props}>
				<Input noSpacing placeholder='How do I learn...' />
			</Form>
		)
	}
}

export default Search;
