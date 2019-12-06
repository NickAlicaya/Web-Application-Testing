import React from "react";

function Dashboard(props) {
	return (
		<div>
			<button className=" button strike" onClick={props.strike}>
				Strike
			</button>
			<button className=" button ball" onClick={props.ball}>
				Ball
			</button>
			<button className=" button foul" onClick={props.foul}>
				Foul
			</button>
			<button className=" button hit" onClick={props.hit}>
				Hit
			</button>
		</div>
	);
}

export default Dashboard;
