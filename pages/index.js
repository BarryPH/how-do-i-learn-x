import Head from 'next/head';
import styled from 'styled-components';

import GlobalStyles from '../css/global.js';
import Search from '../components/shared/Search.js';

const FullHero = styled.div`
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	padding: 2rem;
	overflow: hidden;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
`;

const HeroTitle = styled.h1`
	margin-top: -5rem;
`;

const HeroSearch = styled(Search)`
	margin-top: 1.5rem;
	max-width: 600px;
`;

const Index = (props) => (
	<FullHero>
		<HeroTitle>HowDoILearn</HeroTitle>
		<HeroSearch full placeholder='How do I learn...'/>
	</FullHero>
);

export default Index;
