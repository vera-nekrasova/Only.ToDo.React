import React from 'react';

const PopupAdd = (props) => {
	const [task, setTask] = React.useState('');

	function getTask() {
		if (task.trim()) {
			props.addTask(task);
		}
		props.close();
	}

	return (
		<>
		<div className="popup popup_add-task">
			<div className="container">
					<textarea className="popup__inp popup__inp_add-task" placeholder="Введите текст задачи"
					onChange={(e) => setTask(e.target.value)}
					/>
				<div className="popup__row">
					<div className="popup__btn-close" onClick={()=>props.close()}>Закрыть</div>
					<div className="popup__btn-add" onClick={getTask}>Добавить</div>
				</div>
			</div>
		</div>			
		</>
	)
}

export default PopupAdd