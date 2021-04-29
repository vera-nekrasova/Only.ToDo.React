import React from 'react';
import { connect } from 'react-redux';
import { showPopupEdit, editTodo } from '../.././TodoActions';

const mapStateToProps = ({ todos }) => ({ todos });
const mapDispatchToProps = { showPopupEdit, editTodo };

const PopupEdit = ({ todos, showPopupEdit, editTodo }) => {
	let task = todos.todos.find(index => index.id === todos.editTaskId).title;
	const [titleTask, setTitleTask] = React.useState(task);
	
	return (
		<>
		<div className="popup popup_edit-task">
			<div className="container">
				<input className="popup__inp popup__inp_edit-task" type="text"
					value={titleTask}
						onChange={(e) => setTitleTask(e.target.value)}
					/>
				<div className="popup__row">
					<div className="popup__btn-close" onClick={()=>showPopupEdit()}>Закрыть</div>
					<div className="popup__btn-save" onClick={() => editTodo(titleTask)}>Сохранить</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupEdit);