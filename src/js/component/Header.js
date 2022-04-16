import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

// Header consists of "title" Task Tracker and Add button, imported from Button.js
const Header = ({ title }) => {
	// This is pending Button functionality
	const onClick = () => {
		console.log("Click");
	};
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button color="green" text="Add" onClick={onClick} />
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker",
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
