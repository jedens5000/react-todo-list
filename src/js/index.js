import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Header from "./component/Header";
//From tutorial:
import App from "./component/App";
// import reportWebVitals from "./reportWebVitals";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

//Used in tutorial:
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.querySelector("root")
);
