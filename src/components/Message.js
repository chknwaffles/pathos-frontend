import React from 'react';

export default function Message(props) {
	console.log(props);
	return (
		<React.Fragment>
			<p>
				{props.username}: {props.message}
			</p>
		</React.Fragment>
	);
}
