import React from 'react';
import { connect } from 'react-redux';
import {removeTodo, showPopupEdit} from '../.././TodoActions'

const mapStateToProps = ({ todos, delCircle }) => ({ ...todos, ...delCircle });
const mapDispatchToProps = { removeTodo, showPopupEdit };

const Task = ({ todos, delCircle, removeTodo, showPopupEdit }) => {
	// function showPopupEdit(index) {
	// 	if (props.showDel) {
	// 		props.showPopup();
	// 		props.getChangeTask(index);
	// 	}
	// }

	// function removeTask(index) {
	// 	if (props.showDel) {
	// 		props.removeTask(index);
	// 	}
	// }

	return (
		<>
			{[...todos].map((item, index) => 
				< label className="task" key={index}>
					<input className="checkbox" type="checkbox" />
					{delCircle ?
						<span
							className={"task__circle task__circle_del-task"}
							onClick={() => removeTodo(item.id)}></span> :
						<span
							className={"task__circle task__circle_check"}></span>
					}

					<span className="task__text" onClick={()=>showPopupEdit()}>
						{item.title}
					</span>
				</ label>
			)
			}
		</>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Task)