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
	let popup = '';

	if (popupEdit) {
			popup = <PopupEdit/>;
	} else if (popupAdd) {
		popup = <PopupAdd/>
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