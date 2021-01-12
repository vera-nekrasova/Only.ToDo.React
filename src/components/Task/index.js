import React from 'react';

const Task = (props) => {
	function showPopupEdit(index) {
		if (props.showDel) {
			props.showPopup();
			props.getChangeTask(index);
		}
	}

	function removeTask(index) {
		if (props.showDel) {
			props.removeTask(index);
		}
	}

	return (
		<>
			{props.list.map((item, index) =>
				< label className="task">
					<input className="checkbox" type="checkbox" />
					<span
						className={`task__circle ${props.showDel ? "task__circle_del-task" : "task__circle_check"}`}
						onClick={() => removeTask(index)}></span>
					<span className="task__text" onClick={ () => showPopupEdit(index) }>{item.task}</span>
				</ label>
			)}
		</>
    )
}

export default Task