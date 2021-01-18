import React from 'react';
import { connect } from 'react-redux';
import { showPopupEdit, getTask } from '../.././TodoActions';

const mapStateToProps = ({ todos, popupEdit, popupAdd }) => ({ ...todos, ...popupEdit, ...popupAdd });
const mapDispatchToProps = { showPopupEdit, getTask };

const PopupEdit = ({ showPopupEdit, getTask }) => {
	// function changeTask() {
	// 	if (props.textTask.trim()) {
	// 		props.changeTask(props.textTask);
	// 	}
	// 	props.close();
	// }

	return (
		<>
		<div className="popup popup_edit-task">
			<div className="container">
				<input className="popup__inp popup__inp_edit-task" type="text"
					value={getTask()}
						// onChange={(e) => props.rewriteTask(e.target.value)}
					/>
				<div className="popup__row">
					<div className="popup__btn-close" onClick={()=>showPopupEdit()}>Закрыть</div>
					{/* <div className="popup__btn-save" onClick={changeTask}>Сохранить</div> */}
				</div>
			</div>
		</div>
		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupEdit);