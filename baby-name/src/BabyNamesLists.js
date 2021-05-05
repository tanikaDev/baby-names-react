import { useState } from 'react'
import Favourites from "./Favourites"

function BabyNamesList({ names }) {

	const [favouriteName, setFavouriteName] = useState([{}]);

	function handleClick(e) {
		let name = e.target.innerText;
		let styling = e.target.classList.value.replace('4', '2');
		 
		if (styling.includes('girls')) {
			styling = styling + " favourites-girls"
		} else {
			styling = styling + " favourites-boys"
		}
		setFavouriteName([...favouriteName, {name, styling}])
	 }
	const allGirlsNames = [];
	const allBoysNames = [];
	names.sort((a,b) => {return  (a.name > b.name) ? 1 : -1 }).map((name) => {
		if (name.sex === "f") {
			return allGirlsNames.push(name)
		} 
		return allBoysNames.push(name);
	})
	function GirlsNames(){
		return (
			<>
				<div className="col-6 text-center">
				<h2 id="girls" className="girls-heading">Girls Names</h2>
				<div className="row mx-1 girls-names-list">
					{allGirlsNames.map((name) => (
						<p key={name.name} className="col-4 girls-name-styling" onClick={handleClick}>{name.name} </p>
					))}
				</div>
			</div>
			</>
		);
	}

	function BoysNames() {
		return (
			<>
				<div className="col-6">
				<h2 id="boys" className="boys-heading text-center">Boys Names</h2>
					<div className="row mx-1 boys-names-list">
						{allBoysNames.map((name) => (
						<p key={name.name} className="col-4 boys-name-styling" onClick={handleClick}>{name.name}</p>
						))}
					</div>
			</div>
			</>
		);
	}

	return (
		<>
			<Favourites favourites={favouriteName}/>
			<GirlsNames />
			<BoysNames />
		</>
	);
}

export default BabyNamesList;