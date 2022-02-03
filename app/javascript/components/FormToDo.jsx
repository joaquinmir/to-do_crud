import React,{useState} from 'react'

const FormToDo = props => {

	const [description, setDescription] = useState("");
	const [aux, setAux] = useState("");

	const handleSubmit = (e) => {

		e.preventDefault();
		props.handleSubmit(aux);
		setDescription(aux);
		setAux("");
		
	}

	return(
	<div>
		<form>
			<input
				type="text"
           		className="text"
            	value={aux}
            	onChange={(e) => setAux(e.target.value)}
			/>
			<button  className="ms-3 btn btn-primary" onClick={(e) => handleSubmit(e)}>
				Add
			</button>
		</form>

		
	</div>

	)

}

export default FormToDo