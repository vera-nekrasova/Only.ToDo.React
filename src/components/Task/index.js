import React from 'react';
import { connect } from 'react-redux';
import {removeTodo, showPopupEdit} from '../.././TodoActions'

const mapStateToProps = ({ todos }) => ({ todos });
const mapDispatchToProps = { removeTodo, showPopupEdit };

const Task = ({ todos, removeTodo, showPopupEdit }) => {
	return (
		<>
			{
				todos.todos.length > 0 ? 			
				([...todos.todos].map((item, index) => 
					< label className="task" key={index}>
						<input className="checkbox" type="checkbox"
							disabled={todos.delCircle ? true : false} />
						{todos.delCircle ?
							<span
								className={"task__circle task__circle_del-task"}
								onClick={() => removeTodo(item.id)}></span> :
							<span
								className={"task__circle task__circle_check"}></span>
						}
						<span className="task__text" onClick={() => showPopupEdit(item.id)}>
							{item.title}
						</span>
					</ label>
				)) :
				<div className="main__empty-list">Список задач пуст</div>
			}
		</>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Task)