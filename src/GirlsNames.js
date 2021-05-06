import DisplayNames from "./DisplayNames"

function GirlsNames({ names, selectedSex, clickEvent }) {

	function styling() {

		if (selectedSex === "both") {
			return "col-6 text-center";
		} else if (selectedSex === "girls") {
			return "col-8 offset-2 text-center"
		} else if (selectedSex === "boys") {
			return "display-none"
		} 
	}

	const allGirlsNames = [];
	names.sort((a,b) => {return  (a.name > b.name) ? 1 : -1 }).map((name) => {
		if (name.sex !== "f") {
			return null
		} 
		return allGirlsNames.push(name)
	})

	return (
		<div id="girls" className={styling()}>
			<h2  className="girls-heading">Girls Names</h2>
			<div className="row mx-1 girls-names-list">
				{allGirlsNames.map((name) => (
					<DisplayNames key={name.id} name={name} clickEvent={clickEvent} />
				))}
			</div>
		</div>
	);
}

export default GirlsNames;