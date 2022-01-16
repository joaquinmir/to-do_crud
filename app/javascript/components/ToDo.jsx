import React,{useState, useCallback} from 'react'
import EditToDoForm from './EditToDoForm'
import {Link} from 'react-router-dom'

const ToDo = props => {

	const [content, setContent] = useState(props.content);
	const [folderId, setFolderId] = useState(props.folderId);
	const [id, setId] = useState(props.id);
	const [check, setCheck] = useState(props.check);
	const [editButton, setEditButton] = useState(false);


	const handleOnChange = () => {
		props.handleCheckbox(id);
		setCheck(!check);
	}

	const handleUpdateForm = (contentUpdate) =>{
		props.handleUpdate(contentUpdate,id);
		setContent(contentUpdate);
	}

	return(
		
		<div>
			<div className = "container">
				<div className = "row">
				<div className = "col"><input
			          type="checkbox"
			          className = "form-check-input mt-2 ms-5"
			          defaultChecked={check}
			          onChange={handleOnChange}
	       		 /></div>
				<div className = "col-8">
                    <h5>{content}</h5>
                </div>
	       		<div className = "col"> 
	     		
				<button className= "btn btn-primary btn-sm" onClick={()=>setEditButton(true)}>
						Edit
				</button>
			
				</div>
				<div className = "col">
				<button className="btn btn-danger btn-sm" onClick={props.handleDestroy.bind(this,id)}>
						Delete
				</button>
				</div>
				</div>
			</div>
			<EditToDoForm trigger = {editButton} setTrigger = {setEditButton} handleUpdate = {handleUpdateForm}  content = {content}>
			</EditToDoForm>
		</div>
			
		
		

		);

}

export default ToDo