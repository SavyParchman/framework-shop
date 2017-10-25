import React from "react";
import router from "../router.js";

import "./App.css";

import Nav from "./Nav/Nav";

export function App( { children } ) {
	return (
		<div className="app">
			<Nav />
			{ router }
		</div>
	);
}

export default App;
