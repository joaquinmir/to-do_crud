import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const EditToDoForm = props => {

	const [content, setContent] = useState(props.content);

	const update = () => {
		props.handleUpdate(content);
		props.setTrigger(false)

	}
	
	return(props.trigger) ? (
		
		<div className="popup">
			<div className="container">
				<div className = "position-relative">
					<div className="position-absolute top-50 start-50 translate-middle">
						<div className="popup-inner">
							<h3>Edit To-Do</h3>
							<form className= "mt-4">
								<input
									type="text"
					           		className="text"
					            	value={content}
					            	onChange={(e) => setContent(e.target.value)}
									/>
								<button className="ms-3 btn btn-primary btn-sm" onClick={()=>update()}>UPDATE</button>
							</form>
							
							<button className="mt-3 btn btn-secondary btn-sm"onClick={()=>props.setTrigger(false)}>CANCEL</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : "" ;

	}

		

		



export default EditToDoForm