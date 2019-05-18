import React from 'react';
import { storiesOf } from '@storybook/react';

import Notification from '../shared/Notification.js';

storiesOf('Notification', module)
	.add('Default', () => (
		<Notification>Test Notification</Notification>
	));
