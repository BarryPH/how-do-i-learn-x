import GlobalStyles from '../css/global.js';
import Header from './Header';
import Head from 'next/head';

const Layout = (props) => (
	<div>
		<Head>
			<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Anonymous+Pro' />
		</Head>

		<Header />

		<main>
			{props.children}
		</main>
	</div>
);

export default Layout;
