import styled, {css} from 'styled-components';

const Form = styled.form`
	width: 100%;
`;

const SectionHeader = styled.h3`
`;

const InputRow = styled.div`
	display: flex;

	input {
		flex-grow: 1;
	}
`;

const Input = styled.input`;
	width: 300px;
	max-width: 100%;

	background-color: #eaeaea;
	border: 0;
	padding: 0.5rem 1rem;

	${props => props.full && css`
		width: 100%;
	`}
`;

export {
	Form,
	SectionHeader,
	InputRow,
	Input,
};
