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

	input:not(:last-child) {
		margin-right: 1rem;
	}
`;

const formInputStyles = css`
	display: block;
	width: 100%;
	max-width: 100%;
	background-color: #eaeaea;
	border: 0;
	padding: 0.6rem 0.8rem;
	margin-top: 1.5rem;
	font-family: inherit;
	font-weight: inherit;

	${props => props.noSpacing && css`
		margin-top: 0;
	`}
`;

const Input = styled.input`;
	${formInputStyles}
`;

const TextArea = styled.textarea`
	${formInputStyles}
`;

const Button = styled.button`
	${formInputStyles}
	background-color: #42db41;
	color: #fff;
	font-weight: bold
	font-size: 1.2rem;
	margin-top: 2rem;
	border-bottom: 5px solid #28ba28;
`;

export {
	Form,
	SectionHeader,
	InputRow,
	Input,
	TextArea,
	Button,
};
