import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
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

//ADD TO NOTES:////////////////////////////////////////////////////////
// This is an example of how to create styles within React that are not inline
{
	/* <header>
	<h1 style={headingStyle}>{title}</h1>
</header> */
}
// const headingStyle = {
// 	color: "red",
// 	backgroundColor: "black",
// };
