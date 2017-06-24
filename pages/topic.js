import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../lib/apollo.js';
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
	text-transform: capitalize;

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
	text-transform: capitalize;
`;

const ResourceGroupContainer = (props) => (
	<ResourceGroup>
		<ResourceGroupTitle id={props.type}>{props.type}</ResourceGroupTitle>
		{props.resources.map((resource) => (
			<Anchor block>{resource.title}</Anchor>
		))}
	</ResourceGroup>
);

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


function filterByType(resources) {
	return function(type) {
		return resources.filter((resource) => resource.type === type);
	}
}


class Topic extends React.Component {
	constructor(props) {
		super(props);
	}

	static async getInitialProps(context) {
		const { topic } = context.query;
		const query = gql`{
			resources(topic: "${topic}") {
				_id,
				title,
				type,
				link,
				description,
			},
		}`;

		const { data: { resources } } = await apollo.query({ query });

		const resourcesOfType = filterByType(resources);
		const books = resourcesOfType('book');
		const videos = resourcesOfType('video');
		const articles = resourcesOfType('article');
		const other = resourcesOfType('other');

		return {
			topic,
			resources: {
				books,
				videos,
				articles,
				other,
			},
		};
	}

	render() {
		return (
			<Layout>
				<Block>
					<Container>
						<ResourceListHeader>
							{this.props.topic} <Anchor href='/new'>+ Add Resource</Anchor>
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
									<ResourceGroupContainer type='books' resources={this.props.resources['books']} />
									<ResourceGroupContainer type='articles' resources={this.props.resources['articles']} />
									<ResourceGroupContainer type='videos' resources={this.props.resources['videos']} />
									<ResourceGroupContainer type='other' resources={this.props.resources['other']} />
								</ResourceList>
							</div>
						</LayoutWrapper>
					</Container>
				</Block>
			</Layout>
		)
	}
}

export default Topic;
