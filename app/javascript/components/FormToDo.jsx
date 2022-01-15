import React,{useState} from 'react'

const FormToDo = props => {

	const [description, setDescription] = useState("");


	return(
	<div>
		<form>
			<input
				type="text"
           		className="text"
            	value={description}
            	onChange={(e) => setDescription(e.target.value)}
			/>
		<button  className="ms-3 btn btn-primary" onClick={props.handleSubmit.bind(this,description)}>
			Add
		</button>
		</form>

		
	</div>

		)

}

export default FormToDo