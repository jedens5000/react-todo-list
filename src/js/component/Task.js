import React from "react";
import { FaTimes } from "react-icons/fa";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

// This controls each task independently
const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div
			className={`task ${task.reminder ? "reminder" : ""}`}
			onDoubleClick={() => onToggle(task.id)}>
			<h3>
				{task.text}{" "}
				<FaTimes
					style={{ color: "red", cursor: "pointer" }}
					onClick={() => onDelete(task.id)}
				/>
			</h3>
			<p>{format(new Date({task.day}),PPPPpppp)}</p>
			{/* <p>{task.id}</p> */}
		</div>
	);
};

export default Task;
