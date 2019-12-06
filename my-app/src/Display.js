import React from "react";

function Display(props) {
	return (
		<div className="displayCont">
			<h2>Strikes: {props.strikes}</h2>
			<h2>Balls: {props.balls}</h2>
		</div>
	);
}

export default Display;
