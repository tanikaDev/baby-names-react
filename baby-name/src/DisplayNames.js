function DisplayNames({ name, clickEvent }) {

	return (
		<>
			<p key={name.name} className={name.sex === "f" ? "col-4 girls-name-styling" : "col-4 boys-name-styling"} onClick={clickEvent}>{name.name} </p>
		</>
	);
}

export default DisplayNames;