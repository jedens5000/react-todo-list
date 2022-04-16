import React from "react";
import { useState } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const Home = () => {
	//THIS WILL STORAGE THE TASKS (Sample Task List Current)
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

	//Add Task function
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	//Delete Task
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	//Toggle Reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
		// console.log(id);
	};

	return (
		//Frontend Display
		<div className="container">
			{/* <h1>Test Home.jsx</h1> */}
			<Header />
			<AddTask onAdd={addTask} />
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				"No Tasks Available"
			)}
		</div>
	);
};

export default Home;
