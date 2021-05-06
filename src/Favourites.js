// import React, { useState } from 'react'

function Favourites({favourites, clickEvent } ) {

	return (
		<>
			<div className="col-12">
				<p>Favourites:</p>
				<div className="row">
					{favourites.map((name, index) => {
						return <p key={index} className={name.styling} onClick={clickEvent}>{name.nameSelected}</p>;
					})}
				</div>
			</div>
		</>
	);
}

export default Favourites;