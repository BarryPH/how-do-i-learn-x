import styled from 'styled-components';

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

const New = (props) => (
	<Layout>
		<Block>
			<Container>
				<PageTitle>Add resouce</PageTitle>
				<Form method='POST'>
					<InputRow>
						{/* Auto suggest */}
						<Input placeholder='Topic' name='topic' />
						{/* Set lsit with auto suggest */}
						<Input placeholder='Resouce Type' name='type' />
					</InputRow>
					<Input placeholder='Link' name='link' />
					<TextArea placeholder='Description' rows='12' name='description'></TextArea>
					<Button type='submit'>Submit</Button>
				</Form>
			</Container>
		</Block>
	</Layout>
);

export default New;
