import React from 'react'
import Folders from './Folders/Folders'
import Folder from './Folder/Folder'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar'


const App = () => {

	return(

		<BrowserRouter>
			<div>
			<Navbar/>
			</div>
			<Routes>
				<Route path="/" element={<Folders/>}/>
				<Route path="/folders" element={<Folders/>}/>
				<Route path="/folders/:folderId" element={<Folder/>}/>
				<Route path="*" element={<div><center><h1>ERROR 404 NOT FOUND</h1></center></div>}/>
			</Routes>

		</BrowserRouter>

	);
}

export default App