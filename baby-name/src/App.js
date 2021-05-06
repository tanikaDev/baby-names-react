import React, { useState } from 'react'
import './App.css';
import babyNamesData from "./babyNamesData.json"
import Header from "./Header"
import SearchBar from "./SearchBar"
import Favourites from "./Favourites"
import GirlsNames from "./GirlsNames"
import BoysNames from "./BoysNames"

function App() {

	const [mainList, setMainList] = useState(babyNamesData);
	const [favouriteName, setFavouriteName] = useState([{}]);
	const [toggleSex, setToggleSex] = useState("both")

	function handleClick(e) {
		// let targetIndex = e.target.attributes.index.value;
		let nameSelected = e.target.innerText;
		let styling = e.target.classList.value.replace('4', '2');
		if (styling.includes('girls')) {
			styling = styling + " favourites-girls"
		} else {
			styling = styling + " favourites-boys"
		}


		setFavouriteName([...favouriteName, {nameSelected, styling}])
	 
	 
		let newList = mainList.map(name => name.name !== nameSelected ? name : null ).filter(name => {
			return name !== null
		});
		
		setMainList(newList)

		}

	function removeFromFavourite(e) {
		console.log(e.target.innerText)
		console.log(favouriteName)
		let selectedName = e.target.innerText;
		let newFavourites = favouriteName.map(name => name.nameSelected !== selectedName ? name : null ).filter(name =>  name !== null );
		console.log(newFavourites)
		setFavouriteName(newFavourites)

		let addNameToMain = babyNamesData.filter(name => name.name === selectedName)
		setMainList([...mainList, addNameToMain[0]])
	}

	function changeSex(e) {
		let selectedSex = e.target.id;
		console.log(selectedSex)
		setToggleSex(selectedSex);
	}
	
	return (
		<div className="App">
			<Header />
			<SearchBar state={[mainList,setMainList]} clickEvent={changeSex} />
			<Favourites favourites={favouriteName} clickEvent={removeFromFavourite}/>
			<div className="container-fluid mx-3">
				<div className="row">
					<GirlsNames names={mainList} selectedSex={toggleSex} clickEvent={handleClick} /> 
					<BoysNames names={mainList} selectedSex={toggleSex} clickEvent={handleClick} /> 
				</div>
			</div>
		</div>
	);
}

export default App;
