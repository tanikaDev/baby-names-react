// import Favourites from "./Favourites";

function BoysNames({ names }) {

	const allBoysNames = [];

	names.sort((a,b) => {return (a.name > b.name) ? 1 : -1}).map((name) => {
		if (name.sex !== "m") {
			return null
		}
		return allBoysNames.push(name)
	})

	return (
			<div className="col-6">
				<h2 id="boys" className="boys-heading text-center">Boys Names</h2>
					<div className="row mx-1 boys-names-list">
						{allBoysNames.map((name) => (
						<p key={name.name} className="col-4 boys-name-styling">{name.name}</p>
						))}
					</div>
			</div>
	);
}

export default BoysNames;