import React from 'react';
import Header from '../components/Header';
import Task from '../components/Task';
import PopupAdd from "../components/Popups/popupAdd";
import PopupEdit from "../components/Popups/popupEdit";
import { connect } from 'react-redux';
import { showPopupAdd } from '../TodoActions';


const mapStateToProps = ({ todos, popupEdit, popupAdd }) => ({ ...todos, ...popupEdit, ...popupAdd });
const mapDispatchToProps = ({ showPopupAdd });

const ToDo = ({ todos, popupEdit, popupAdd, showPopupAdd }) => {
	const [showDelTask, setShowDelTask] = React.useState(false);
	const [showPopup, setShowPopup] = React.useState('');
	const [list, setList] = React.useState([]);
	const [textChangeTask, setTextChangeTask] = React.useState('');
	const [changeIndexTask, setChangeIndexTask] = React.useState('');
	const [changeList, setChangeList] = React.useState(false);

	let popup;

	if (popupEdit) {
			popup = <PopupEdit/>;
	} else if (popupAdd) {
		popup = <PopupAdd/>
	}

	function getDelTask(value) {
		setShowDelTask(value);
	}

	function closePopup() {
		setShowPopup('');
	}

	function addTask(value) {
		setList(prevState => [...prevState, { task: value }]);
	}

	function removeTask(index) {
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
				<Header/>
				
				<main className="main">
					<Task/>
					<div className="btn-add" onClick={() => showPopupAdd()}>+</div>
				</main>
			</div>

			{popup}
		</>
	)
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDo);