import React from "react";
import { useState } from "react";
import Header from "./Header";
import Tasks from "./Tasks";

const Home = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Doctors Appt",
			day: "Feb 5th at 2:30pm",
			reminder: true,
		},
		{
			id: 2,
			text: "Meeting at School",
			day: "Feb 6th at 1:30pm",
			reminder: true,
		},
		{
			id: 3,
			text: "Grocery Shopping",
			day: "Feb 5th at 2:30pm",
			reminder: false,
		},
	]);

	//Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div className="container">
			{/* <h1>Test Home.jsx</h1> */}
			<Header />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} />
			) : (
				"No Tasks Available"
			)}
		</div>
	);
};

export default Home;

//ADD TO NOTES/////////////////////////////////////////
//THIS IS AN EXAMPLE OF USING JS WITHIN THE HTML TO CALCULATE AGE
{
	/* <h3>You are {2022 - 1973} years old today.</h3> */
}
