import { TODO_ADD, TODO_REMOVE, TODO_EDIT, DEL_CIRCLE, SHOW_POPUP_EDIT, SHOW_POPUP_ADD } from "./types";

const initialState = {
	todos: [
		{
			id: 1,
			title: 'Пропылесосить'
		},
		{
			id: 2,
			title: 'Купить картошку'
		}
	],

	delCircle: false,
	popupEdit: false,
	popupAdd: false,
	unicID: 2,
	editTaskId: '',
	blockBtn: false,
}

export const todoReduser = (state = initialState, action) => {
	switch (action.type) {
		case TODO_ADD:
			if (action.payload.trim() !== '') {
				return {
					...state, todos: [
						...state.todos,
						{
							id: state.unicID + 1,
							title: action.payload
						}
					], popupAdd: false, unicID: state.unicID + 1, blockBtn: false
				}
			}
			return state

		case TODO_EDIT:
			if (action.payload.trim() !== '') {
				[...state.todos].find(index => index.id === state.editTaskId).title = action.payload;
				return {
					...state, todos: [...state.todos], popupEdit: false, delCircle: false, blockBtn: false
				}
			}
			return state
		
		case TODO_REMOVE:
			let newTodo = [...state.todos].filter(({ id }) => id !== action.payload);
			let blockBtnState = false;
			if (state.todos.length === 1) {
				blockBtnState = true;
			}
			return {
				...state, todos: newTodo, blockBtn: blockBtnState, delCircle: !blockBtnState
			}
		
		case DEL_CIRCLE:
			if (state.delCircle) {
				return {
					...state, delCircle: false
				}
			} else {
				return {
					...state, delCircle: true
				}
			}

		case SHOW_POPUP_EDIT:
			if (state.delCircle && !state.popupEdit) {
				return {
					...state, popupEdit: true, editTaskId: action.payload, blockBtn: true
				}
			} else if (state.popupEdit) {
				return {
					...state, popupEdit: false, blockBtn: false
				}
			} else {
				return state
			}

		case SHOW_POPUP_ADD: {
			if (state.popupAdd) {
				return {
					...state, popupAdd: false, blockBtn: false
				}
			} else {
				return {
					...state, popupAdd: true, blockBtn: true
				}
			}
		}
			
		default :
			return state
	}
}