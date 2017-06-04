import styled from 'styled-components';

import Layout from '../components/Layout.js';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import Anchor from '../components/shared/Anchor.js';

const ResourceListHeader = styled.h2`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0;
	margin-left: calc(200px + 1rem);

	a {
		font-size: 1rem;
		font-weight: normal;
	}
`;

const AddResourseButton = styled.h4`
`;

const ResourceList = styled.div`
`;

const ResourceGroup = styled.div`
	a {
		color: #005fff;
	}
`;

const ResourceGroupTitle = styled.h4`
`;

const Resouce = styled.div`
`;

const LayoutWrapper = styled.div`
	display: flex;
	align-items: flex-start;
`;

const Sidebar = styled.ul`
	position: sticky;
	top: 2rem;
	padding: 0;
	margin: 0;
	margin-right: 1rem;
	width: 200px;
	opacity: 0.8;
`;

const Topic  = (props) => (
	<Layout>
		<Block>
			<Container>
				<ResourceListHeader>
					React <Anchor href='/new'>+ Add Resource</Anchor>
				</ResourceListHeader>

				<LayoutWrapper>
					<Sidebar>
						<ResourceGroupTitle>Types</ResourceGroupTitle>
						<Anchor block href='#books'>Books</Anchor>
						<Anchor block href='#videos'>Videos</Anchor>
						<Anchor block href='#articles'>Articles</Anchor>
						<Anchor block href='#other'>Other</Anchor>
					</Sidebar>

					<div>
						<ResourceList>
							<ResourceGroup>
								<ResourceGroupTitle id='books'>Books</ResourceGroupTitle>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
							</ResourceGroup>
							<ResourceGroup>
								<ResourceGroupTitle id='videos'>Videos</ResourceGroupTitle>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
							</ResourceGroup>
							<ResourceGroup>
								<ResourceGroupTitle>Articles</ResourceGroupTitle>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
							</ResourceGroup>
							<ResourceGroup>
								<ResourceGroupTitle>Other</ResourceGroupTitle>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
								<Anchor block>Testing</Anchor>
							</ResourceGroup>
						</ResourceList>
					</div>
				</LayoutWrapper>
			</Container>
		</Block>
	</Layout>
);

export default Topic;
