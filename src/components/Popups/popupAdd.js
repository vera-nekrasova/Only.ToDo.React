import React from 'react';
import { connect } from 'react-redux';
import { showPopupAdd, addTodo } from '../../TodoActions';

const mapDispatchToProps = { showPopupAdd, addTodo };

const PopupAdd = ({showPopupAdd, addTodo}) => {
	const [task, setTask] = React.useState('');

	return (
		<>
		<div className="popup popup_add-task">
			<div className="container">
					<textarea className="popup__inp popup__inp_add-task" placeholder="Введите текст задачи"
					onChange={(e) => setTask(e.target.value)}
					/>
				<div className="popup__row">
					<div className="popup__btn-close" onClick={()=>showPopupAdd()}>Закрыть</div>
					<div className="popup__btn-add" onClick={() => addTodo(task)}>Добавить</div>
				</div>
			</div>
		</div>			
		</>
	)
}

export default connect(null, mapDispatchToProps)(PopupAdd);