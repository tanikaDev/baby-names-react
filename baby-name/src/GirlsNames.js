import Favourites from "./Favourites";

function GirlsNames({ names }) {
	const allGirlsNames = [];
	names.sort((a,b) => {return  (a.name > b.name) ? 1 : -1 }).map((name) => {
		if (name.sex !== "f") {
			return null
		}
		return allGirlsNames.push(name)
	})

	//  function handleClick(event) {
	// 	 console.log(event.target.value)
	// 	 let nameSelected = event.target.innerText;

	// 	 const nameSelectedDetails = allGirlsNames.filter((name) => {
	// 		 if (name.name === nameSelected) {
	// 			 return name
	// 		 }
	// 	 })

	// 	 Favourites(nameSelectedDetails)
		 
	//  }

	return (
		<div className="col-6 text-center">
			<h2 id="girls" className="girls-heading">Girls Names</h2>
			<div className="row mx-1 girls-names-list">
				{allGirlsNames.map((name) => (
					<p key={name.name} className="col-4 girls-name-styling" onClick= {(e) => Favourites(e)}>{name.name} </p>
				))}
			</div>
		</div>
	);
}

export default GirlsNames;