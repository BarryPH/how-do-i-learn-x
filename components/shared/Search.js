import styled, {css} from 'styled-components';

const Input = styled.input`
	width: 300px;
	max-width: 100%;
	background-color: #eaeaea;
	border: 0;
	padding: 0.5rem 1rem;

	${props => props.full && css`
		width: 100%;
	`}
`;

class Search extends React.Component {
	render() {
		return (
			<Input {...this.props} />
		)
	}
}

export default Search;
