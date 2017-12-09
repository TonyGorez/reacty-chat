import React from 'react';
import Discuss from '../Discuss/Discuss';
import InputArea from '../InputArea/InputArea';

class Room extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div id="Room">
				<Discuss />
				<InputArea />
			</div>
		)
	}
}

export default Room; 