import React from 'react';

const PopupEdit = (props) => {
	function changeTask() {
		if (props.textTask.trim()) {
			props.changeTask(props.textTask);
		}
		props.close();
	}

	return (
		<>			
		<div className="popup popup_edit-task">
			<div className="container">
				<input className="popup__inp popup__inp_edit-task" type="text"
					value={props.textTask}
					onChange={(e) => props.rewriteTask(e.target.value)} />
				<div className="popup__row">
					<div className="popup__btn-close" onClick={()=>props.close()}>Закрыть</div>
					<div className="popup__btn-save" onClick={changeTask}>Сохранить</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default PopupEdit