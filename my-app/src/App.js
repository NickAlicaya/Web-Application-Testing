import React, { useState } from "react";
import Display from "./Display";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
	//   - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
	// - balls and strikes reset to 0 when a `hit` is recorded.
	// - a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
	const [strikes, setStrikes] = useState(0);
	const [balls, setBalls] = useState(0);
	const [fouls, setFouls] = useState(0);

	const strike = () => {
		if (strikes < 3) {
			setStrikes(strikes + 1);
		} else {
			setStrikes(0);
			setBalls(0);
			setFouls(0);
		}
	};

	const hit = () => {
		setStrikes(0);
		setBalls(0);
	};

	const ball = () => {
		if (balls < 4) {
			setBalls(balls + 1);
		} else {
			setStrikes(0);
			setBalls(0);
		}
	};

	const foul = () => {
		if (strikes < 2) {
			setStrikes(strikes + 1);
			setFouls(fouls + 1);
		}
	};

	return (
		<div className="App">
			<Display strikes={strikes} balls={balls} />
			<Dashboard strike={strike} ball={ball} foul={foul} hit={hit} />
		</div>
	);
}

export default App;
