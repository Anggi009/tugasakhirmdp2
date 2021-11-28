import React from 'react';
import Button from '../../element/button'

const BackHome = (props) => {
	const handleBack = () => {
		props.history.push('/CountryStyled');
	};

	return (
		<div className='back-home'>
			<Button onClick={handleBack} backgnd='#525252' backhov='#000000'>
				Back
			</Button>
		</div>
	);
};

export default BackHome;
