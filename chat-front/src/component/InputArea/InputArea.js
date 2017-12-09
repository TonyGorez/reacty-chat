import React from 'react'; 
import Room from '../Room/Room';

class InputArea extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="InputArea">
				<input type="text" id="newMessage" />
				{/* <input type="button" value="Envoyer" id="sendMessage" /> */}
				<button class="btn waves-effect waves-light" name="action" type="button" value="Envoyer" id="sendMessage">
					<i class="material-icons right">send</i>
				</button>
        	</div>
		)
	}
}

export default InputArea;