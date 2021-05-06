import DisplayNames from "./DisplayNames"

function BoysNames({ names, selectedSex, clickEvent }) {

	function styling() {

		if (selectedSex === "both") {
			return "col-6 text-center";
		} else if (selectedSex === "boys") {
			return "col-8 offset-2 text-center"
		} else if (selectedSex === "girls") {
			return "display-none"
		} 
	}
	const allBoysNames = [];

	names.sort((a,b) => {return (a.name > b.name) ? 1 : -1}).map((name) => {
		if (name.sex !== "m") {
			return null
		}
		return allBoysNames.push(name)
	})

	return (
			<div id="boys" className={styling()}>
				<h2  className="boys-heading text-center">Boys Names</h2>
					<div className="row mx-1 boys-names-list">
						{allBoysNames.map((name) => (
							<DisplayNames key={name.id} name={name} clickEvent={clickEvent} />
						))}
					</div>
			</div>
	);
}

export default BoysNames;