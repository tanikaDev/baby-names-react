function SelectSex( { clickEvent }) {
	return (
		<div className="col-3">
			<div className="row">
				<i id="both" className="fas fa-genderless col-1" onClick={clickEvent}></i>
				<i id="girls" className="fas fa-venus col-1" onClick={clickEvent}></i>
				<i id="boys" className="fas fa-mars col-1" onClick={clickEvent}></i>
			</div>
		</div>
	);
}

export default SelectSex;