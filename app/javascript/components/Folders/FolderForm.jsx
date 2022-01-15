import React,{useState} from 'react'

const FolderForm = props => {

	const [name, setName] = useState("");


	return(
	<div  className="mt-2">
		<form>
			<input
				type="text"
           		className="text"
            	value={name}
            	onChange={(e) => setName(e.target.value)}
            
			/>
		<button className="ms-2 btn btn-secondary" onClick={props.handleSubmit.bind(this,name)}>
			Add
		</button>
		</form>


	</div>

		)

}

export default FolderForm