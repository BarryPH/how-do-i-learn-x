import React from 'react';
import styled from 'styled-components';


const NotificationWrapper = styled.div`
	position: fixed;
	top: 2rem;
	left: 50%;
	transform: translateX(-50%);
	padding: 0.4rem 1rem;
	color: #fff;
	background-color: rgba(242, 48, 48, 0.8);
	border: 1px solid rgba(242, 48, 48, 1);
`;

const CloseButton = styled.a`
	font-weight: bold;
	margin-left: 1rem;
`;


class Notifications extends React.Component {
	constructor(props) {
		super(props);

		const notification = {
			message: this.props.message,
			id: new Date().getTime(),
		};

		this.state = {
			notifications: notification,
		};
	}

	createNotificationData() {
	}

	addNotification(message) {
		const notifications = this.state.notifications;

		notifications.push({
			id: new Date().getTime(),
			message,
		});

		this.setState({ notifications })
	}

	removeNotification(id) {
		const notifications = this.state.notifications;

		notifications.filter((notification) => notifications.id !== id);

		this.setState({ notifications });
	}

	close(event) {
		const id = event.currentTarget.getAttribute('id');

		removeNotification(id);
	}

	render() {
		return (
			<div>
				{this.state.notifications.map((notification) => (
					<NotificationWrapper data-id={notification.id}>
						{notification.message}
						<CloseButton onClick={this.close}>&#10007;</CloseButton>
					</NotificationWrapper>
				))}
			</div>
		)
	}
};

export default Notifications;
