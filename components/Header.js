import Link from 'next/link';
import styled from 'styled-components';

import Container from './shared/Container.js';
import Anchor from './shared/Anchor.js';
import Search from './shared/Search.js';

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

const SearchWrapper = styled.div`
	flex-grow: 1;
`;

const Header = () => (
	<Container>
		<SiteHeader>
			<Link href='/'>
				<Logo><span>&#8516;</span> HowDoILearn</Logo>
			</Link>

			<Search placeholder='How do I learn...' />

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