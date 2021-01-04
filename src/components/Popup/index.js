import React from 'react';

const Popup = (props) => {
	const [show, setShow] = React.useState(false);
	const [task, setTask] = React.useState('');

	function getTask() {
		if (task.trim()) {
			props.addTask(task);
		}
		setShow(false);
		setTask('');
	}

	function changeTask() {
		if (props.textTask.trim()) {
			props.changeTask(props.textTask);
		}
		props.showPopup(false);
	}

	function closePopup () {
		setShow(false);
		setTask('');
	}

	return (
		<>
		<div className={`popup popup_add-task ${!show ? 'hide-popup' : ''}`}>
			<div className="container">
				<textarea className="popup__inp popup__inp_add-task" placeholder="Введите текст задачи" value={ task } onChange={(e) => setTask(e.target.value) }/>
				<div className="popup__row">
					<div className="popup__btn-close" onClick={closePopup}>Закрыть</div>
					<div className="popup__btn-add" onClick={getTask}>Добавить</div>
				</div>
			</div>
		</div>
			
		<div className={`popup popup_edit-task ${!props.showPopupEdit ? 'hide-popup' : ''}`}>
			<div className="container">
				<input className="popup__inp popup__inp_edit-task" type="text" value={props.textTask} onChange={(e) => props.rewriteTask(e.target.value)} />
				<div className="popup__row">
					<div className="popup__btn-close" onClick={() => { props.showPopup(false) }}>Закрыть</div>
					<div className="popup__btn-save" onClick={changeTask}>Сохранить</div>
				</div>
			</div>
		</div>
			
		<div className="btn-add" onClick={() => setShow(true)}>+</div>
		</>
	)
}

export default Popup