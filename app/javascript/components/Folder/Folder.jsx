import React,{useState, useEffect} from 'react'
import ToDo from '../ToDo'
import FormToDo from '../FormToDo'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

const header = {
    "X-CSRF-Token": document.querySelector('[name=csrf-token]').content, 
    "Content-Type": "application/json"
  }



const Folder = (props) => {
	const [todos,setTodos] = useState([]);
	const [folderId, setFolderId] = useState(useParams().folderId);
	const [name, setName] = useState("");
	console.log(folderId);

	useEffect(()=>{
		fetch(`../api/folders/${folderId}`)
		.then((resp) => {return resp.json();})
		.then((resp) => { 	
			setName(resp.name);

		})},[]);

	useEffect(()=>{
		fetch(`../api/folders/${folderId}/todos`)
		.then((resp) => {return resp.json();})
		.then((resp) => { 

			setTodos(resp);

			})},[]);

	const handleDestroy = (id,e) => {
		e.preventDefault();

		fetch(`../api/folders/${folderId}/todos/${id}`,{
			method: "DELETE",
			headers: header,
		}
		)
		.then((resp) =>{
			const included = [...todos]
			const index = included.findIndex( (resp) => resp.id == id )
			included.splice(index, 1)
			setTodos(included)
		})

	}

	const handleCheckbox = (id,e) =>{
		console.log(id);
		const todo = todos.find((resp) => resp.id == id)

		fetch(`../api/folders/${folderId}/todos/${id}`,{
			method: "PUT",
			headers: header,
			body: JSON.stringify({check: !todo.check})
			})
	}

	const handleUpdate = (content,id,e) =>{
		console.log(id);
		const todo = todos.find((resp) => resp.id == id)

		fetch(`../api/folders/${folderId}/todos/${id}`,{
			method: "PUT",
			headers: header,
			body: JSON.stringify({content: `${content}`})
			})
	}

	const handleSubmit = (description,e) => {
		e.preventDefault();
		if(description.length > 0){
	   
	    fetch(`../api/folders/${folderId}/todos`,{
			method: "POST",
			headers: header,
			body: JSON.stringify({ content:`${description}`}),
		})
		.then( (resp) => {
      		resp.json().then((data) => {
                setTodos([...todos, data])
     
            });
      		//setTodos([...todos, resp.json()])
      		
    })
		}
		else{
			alert("Task cannot be blank")
		}
  	};
	
	
	return(
		<div className ="p-4">
		<Link to="/" class="text-decoration-none">
      	<h1>Folders</h1> 
      	</Link>
      	<h2 className = "ms-5">> {name}</h2> 
      	
      		<div className = "my-5"> 
				<ul> 
				{todos.map((data) => 
					<ToDo key={data.id} 
					id = {data.id} 
					content={data.content} 
					check={data.check} 
					folderId={folderId} 
					handleCheckbox={handleCheckbox} 
					handleDestroy={handleDestroy}
					handleUpdate={handleUpdate}/>)}
				</ul>
				
				
			</div>
		<div className="d-flex justify-content-center mt-4">
        			<FormToDo handleSubmit={handleSubmit}/>
      			</div>
		</div>
	);

}
export default Folder