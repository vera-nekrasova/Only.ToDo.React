import { TODO_ADD, TODO_REMOVE, TODO_EDIT, DEL_CIRCLE, SHOW_POPUP_EDIT, SHOW_POPUP_ADD, GET_TASK } from "./types";

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
	editTaskId: ''
}

export const todoReduser = (state = initialState, action) => {
	switch (action.type) {
		case TODO_ADD:
			return {
				...state, todos: [
					...state.todos,
					{
						id: state.unicID + 1,
						title: action.payload
					}
				], popupAdd: false, unicID: state.unicID + 1
			}

		case TODO_EDIT:
			[...state.todos].find(index => index.id == state.editTaskId).title =  action.payload;
			return {
				...state, todos: [...state.todos], popupEdit: false
			}
		
		case TODO_REMOVE:
			let newTodo = [...state.todos].filter(({ id }) => id !== action.payload);
			return {
				...state, todos: newTodo
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
					...state, popupEdit: true, editTaskId: action.payload
				}
			} else if (state.popupEdit) {
				return {
					...state, popupEdit: false
				}
			} else {
				return state
			}

		case SHOW_POPUP_ADD: {
			if (state.popupAdd) {
				return {
					...state, popupAdd: false
				}
			} else {
				return {
					...state, popupAdd: true
				}
			}
		}
			
		default :
			return state
	}
}