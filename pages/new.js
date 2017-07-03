import React from 'react';
import styled, { css } from 'styled-components';
import gql from 'graphql-tag';

import apollo from '../lib/apollo.js';

import Layout from  '../components/Layout.js';
import Block from '../components/shared/Block.js';
import Container from '../components/shared/Container.js';
import {
	Form,
	SectionHeader,
	InputRow,
	Input,
	TextArea,
	Button,
} from '../components/shared/Form.js';

const PageTitle = styled.h2`
	margin-top: 0;
`;

const Notification = styled.div`
	text-align: center;
	margin-bottom: 0.5rem;

	${props => props.success && css`
		color: #42db41;
	`};

	${props => props.danger && css`
		color: rgba(242, 48, 48, 1);
	`};
`;

class New extends React.Component {
	defaultFormValues = {
		title: '',
		topic: '',
		type: '',
		link: '',
		description: '',
	}

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			...this.defaultFormValues,
			formSubmitted: false,
			notification: {
				success: false,
				message: '',
			}
		};
	}

	validateFields() {
		const { title, topic, type } = this.state;

		if (!topic.length)
			return 'Topic must not be empty';
		if (!type.length)
			return 'Type must not be empty';
		if (!title.length)
			return 'Title must not be empty';

		return null;
	}


	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value,
		});
	}

	async handleSubmit(event) {
		event.preventDefault();
	
		this.setState({
			formSubmitted: true,
		});

		const validationError = this.validateFields();

		if (validationError) {
			this.setState({
				notification: {
					success: false,
					message: validationError,
				}
			});

			return;
		}

		const mutation = gql`mutation {
			createResource(
				title: "${this.state.title}",
				topic: "${this.state.topic}",
				type: "${this.state.type}",
				link: "${this.state.link}",
				description: ${JSON.stringify(this.state.description)},
			) {
				_id,
			}
		}`;

		await apollo.mutate({ mutation });

		this.setState({
			...this.defaultFormValues,
			notification: {
				success: true,
				message: "Thanks for your contribution! Your resource has been added.",
			},
		 });
	}

	render() {
		return (
			<Layout>
				<Block>
					<Container>
						<PageTitle>Add resouce</PageTitle>

						<Form method='POST' onSubmit={this.handleSubmit}>
						{ this.state.formSubmitted &&
							<Notification success={this.state.notification.success} danger={!this.state.notification.success}>{this.state.notification.message}</Notification>
						}
							<InputRow>
								{/* Auto suggest */}
								<Input placeholder='Topic' name='topic' value={this.state.topic} onChange={this.handleChange} />
								{/* Set lsit with auto suggest */}
								<Input placeholder='Resouce Type' name='type' value={this.state.type} onChange={this.handleChange} />
							</InputRow>

							<Input placeholder='Title' name='title' value={this.state.title} onChange={this.handleChange} />
							<Input placeholder='Link' name='link' value={this.state.link} onChange={this.handleChange} />
							<TextArea placeholder='Description' rows='12' value={this.state.descriptio} name='description'onChange={this.handleChange} />

							<Button type='submit'>Submit</Button>
						</Form>
					</Container>
				</Block>
			</Layout>
		)
	}
}

export default New;
