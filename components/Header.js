import Link from 'next/link';
import styled from 'styled-components';

import Container from './shared/Container.js';
import Anchor from './shared/Anchor.js';
import Search from './shared/Search.js';
import {
	Form,
	Input
} from './shared/Form.js';

const SiteHeader = styled.div`
	padding: 2rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled(Anchor)`
	span {
		font-weight: bold;
		font-style: italic;
	}
`;

const SearchWrapper = styled(Search)`
	width: 300px;
`;

const Header = () => (
	<Container>
		<SiteHeader>
			<Link href='/'>
				<Logo><span>&#8516;</span> HowDoILearn</Logo>
			</Link>

			<SearchWrapper />

			<nav>
				<Link href='/Top'>
					<Anchor>Top</Anchor>
				</Link>

				<Link href='/Random'>
					<Anchor>Random</Anchor>
				</Link>
			</nav>
		</SiteHeader>
	</Container>
);

export default Header;
