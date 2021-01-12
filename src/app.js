import React from 'react';
import Header from './components/Header';
import Task from './components/Task';
import PopupAdd from "./components/Popups/popupAdd"
import PopupEdit from "./components/Popups/popupEdit"

export default function (props) {
	const [showDelTask, setShowDelTask] = React.useState(false);
	const [showPopup, setShowPopup] = React.useState('');
	const [list, setList] = React.useState([]);
	const [textChangeTask, setTextChangeTask] = React.useState('');
	const [changeIndexTask, setChangeIndexTask] = React.useState('');
	const [changeList, setChangeList] = React.useState(false);

	let popup;
	let isList;

	switch (showPopup) {
		case 'add':
			popup = <PopupAdd
				close={closePopup}
				addTask={addTask}
			/>;
			break;
		case 'edit':
			popup = <PopupEdit
				close={closePopup}
				textTask={textChangeTask}
				rewriteTask={rewriteTask}
				changeTask={changeTask} />;
			break;
		default: popup = '';
	}

	if (list.length > 0) {
		isList = <Task showDel={showDelTask}
				list={list}
				removeTask={removeTask}
				getChangeTask={getChangeTask}
				showPopup={()=>setShowPopup('edit')}/>
	} else {
		isList = <div className="main__empty-list">Список задач пуст</div>;
	}


	function  getDelTask (value) {
		setShowDelTask(value);
	}

	function closePopup() {
		setShowPopup('');
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
				<Header getDelTask={getDelTask}
					showDelTask={showDelTask}
					list={list}
					show={changeList}/>
				
				<main className="main">
					{isList}
					<div className="btn-add" onClick={() => setShowPopup('add')}>+</div>
				</main>
			</div>

			{popup}
		</>
	)
}
