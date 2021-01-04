import React from 'react';
import Header from './components/Header';
import Task from './components/Task';
import Popup from "./components/Popup"


export default function (props) {
	const [showDelTask, setShowDelTask] = React.useState(false);
	const [showPopupEdit, setShowPopupEdit] = React.useState(false);
	const [list, setList] = React.useState([]);
	const [textChangeTask, setTextChangeTask] = React.useState('');
	const [changeIndexTask, setChangeIndexTask] = React.useState('');

	function  getDelTask (value) {
		setShowDelTask(value);
	}

	function  showPopup (value) {
		setShowPopupEdit(value);
	}

	function  addTask (value) {
		setList(prevState => [...prevState, { task: value }]);
	}

	function  removeTask (index) {
		setList(list.filter((item, i) => i !== index));
	}

	function getChangeTask(index) {
		setTextChangeTask(list[index].task);
		setChangeIndexTask(index);
	}

	function rewriteTask(text) {
		setTextChangeTask(text);
	}

	function changeTask(text) {
		list.map((item, i) => {
			if (i == changeIndexTask) {
				item.task = text
			}
		})
	}

	return (
		<>
			<div className="container">
				<Header getDelTask={getDelTask} showDelTask={showDelTask} />
				<main className="main">
					<div className={`main__empty-list ${list.length == 0 ? '' : 'hide'}`}>Список задач пуст</div>
					<Task showDel={showDelTask} showPopup={showPopup} list={list} removeTask={ removeTask} getChangeTask={ getChangeTask }/>
				</main>
			</div>
			<Popup showPopupEdit={showPopupEdit} showPopup={showPopup} addTask={addTask} textTask={textChangeTask} rewriteTask={rewriteTask} changeTask={changeTask}/>
		</>
	)
}
