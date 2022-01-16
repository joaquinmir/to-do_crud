import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'



const Folder = (props) => {
    const [folderId, setFolderId] = useState(props.folderId);
    const [name, setName] = useState(props.name);

    return(
        <div className = "container">
            <div className = "row">
                <div className = "col">
                    <h2>- {name}</h2>
                </div>
                <div className ="col">
                    <Link to= {"/folders/" + folderId}> 
                        <button className="btn btn-primary">
                            View Items
                        </button>
                    </Link>
                </div>
                <div className = "col">
                    <button className="btn btn-danger" onClick={props.handleDestroy.bind(this,folderId)}>
                                Delete
                    </button>
                </div>
            </div>
        </div>
        )

}

export default Folder