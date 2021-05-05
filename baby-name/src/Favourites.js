// import React, { useState } from 'react'

function Favourites( { favourites }) {
	console.log(favourites)

	function removeName() {
		
	}
	return (
		<>
			<div className="col-12">
				<p>Favourites:</p>
				<div className="row">
					{favourites.map((name, index) => {
						return <p key={index} className={name.styling} onClick={removeName}>{name.name}</p>;
					})}
				</div>
			</div>
		</>
	);
}

export default Favourites;