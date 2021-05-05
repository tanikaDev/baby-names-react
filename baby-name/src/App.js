import React, { useState } from 'react'
import './App.css';
import babyNamesData from "./babyNamesData.json"
import Header from "./Header"
import Favourites from "./Favourites"
import BabyNamesList from "./BabyNamesLists"


function App() {

	const [names, setNames] = useState(babyNamesData);
	return (
		<div className="App">
			<Header state={[names,setNames]}/>
			{/* <Favourites /> */}
			<div className="container-fluid mx-3">
				<div className="row">
					<BabyNamesList names={names} /> 
					{/* <GirlsNames names={names} /> 
					<BoysNames names={names} />  */}
				</div>
			</div>
		</div>
	);
}

export default App;
