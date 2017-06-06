import React from 'react';

import {
	Form,
	Input,
} from './Form.js';


class Search extends React.Component {
	render() {
		return (
			<Form>
				<Input {...this.props} />
			</Form>
		)
	}
}

export default Search;
