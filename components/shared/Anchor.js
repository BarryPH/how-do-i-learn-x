import styled, {css} from 'styled-components';

const Anchor = styled.a`
	:not(:last-child) {
		margin-right: 1.5rem;
	}

	${props => props.block && css`
		display: block;
	`}
`;

export default (props) => (<Anchor href='' {...props}>{props.children}</Anchor>);
