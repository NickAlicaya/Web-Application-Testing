import React from "react";

function Display(props) {
	return (
		<div className="displayCont" data-testid="display-component">
			<h2>Strikes: {props.strikes}</h2>
			<h2>Balls: {props.balls}</h2>
		</div>
	);
}

export default Display;
