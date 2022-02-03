import React,{useState} from 'react'

const FolderForm = props => {

	const [name, setName] = useState("");
	const [aux, setAux] = useState("");
	const handleSubmit = (e) => {

		e.preventDefault();
		props.handleSubmit(aux);
		setName(aux);
		setAux("");
		
	}

	return(
	<div  className="mt-2">
		<form>
			<input
				type="text"
           		className="text"
            	value={aux}
            	onChange={(e) => setAux(e.target.value)}
			/>
		<button className="ms-2 btn btn-secondary" onClick={(e) => handleSubmit(e)}>
			Add
		</button>
		</form>


	</div>

	)

}

export default FolderForm