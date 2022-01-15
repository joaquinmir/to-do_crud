import React,{useState, useEffect} from 'react'
import Folder from './Folder'
import FolderForm from './FolderForm'
const header = {
    "X-CSRF-Token": document.querySelector('[name=csrf-token]').content, 
    "Content-Type": "application/json"
  }

const Folders = () => {

  const [folders,setFolders] = useState([]);
  useEffect(()=>{
    fetch(`api/folders`)
    .then((resp) => {return resp.json();})
    .then((resp) => { 

      setFolders(resp);

      })},[]);

  const handleDestroy = (id,e) => {
    e.preventDefault();

    fetch(`api/folders/${id}`,{
      method: "DELETE",
      headers: header,
    }
    )
    .then((resp) =>{
      const included = [...folders]
      const index = included.findIndex( (resp) => resp.id == id )
      included.splice(index, 1)
      setFolders(included)
    })

  }

  const handleSubmit = (name,e) => {
    console.log(name)
      e.preventDefault();
      fetch(`api/folders`,{
      method: "POST",
      headers: header,
      body: JSON.stringify({ name:`${name}`}),
    })
    .then( (resp) => {
          resp.json().then((data) => {
                setFolders([...folders, data])
     
            });
          //setTodos([...todos, resp.json()])
          
    })
    };

  return (
    <div className ="p-4">
    <h1>Folders</h1>
      <div className ="my-5">
        <ul> 
          {folders.map((data) => 
          <Folder key={data.id} 
          folderId = {data.id} 
          name={data.name} 
          handleDestroy={handleDestroy}
          />)}
        </ul>
      </div>
      <div className="d-flex justify-content-center">
        <FolderForm handleSubmit = {handleSubmit}/>
      </div>
    </div>
  )
}

export default Folders