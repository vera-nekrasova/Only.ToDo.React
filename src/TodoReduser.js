import { TODO_ADD, TODO_REMOVE, TODO_EDIT, DEL_CIRCLE, SHOW_POPUP_EDIT } from "./types";

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
	textHeaderBtn: 'Править',
	popupEdit: false,
	showPopupAdd: false
}

export const todoReduser = (state = initialState, action) => {
	switch (action.type) {
		case TODO_ADD:
			return {
				todos: [
					...state.todos, action.payload
				]
			}
		
		case TODO_REMOVE:
			let newTodo = [...state.todos].filter(({ id }) => id !== action.payload);
			return {
				...state, todos: newTodo
			}
		
		case DEL_CIRCLE:
			if (state.delCircle) {
				return {
					...state, textHeaderBtn: 'Править', delCircle: false
				}
			} else {
				return {
					...state, textHeaderBtn: 'Отменить', delCircle: true 
				}
			}

		case SHOW_POPUP_EDIT:
			
			console.log(state.popupEdit)
			if (state.delCircle && !state.popupEdit) {
				console.log(1)

				return {
					...state, popupEdit: true
				}
			} else if (state.popupEdit) {
				console.log(2)

				return {
					...state, popupEdit: false
				}
			} else {
				console.log(3)

				return state
			}
			
		default :
			return state
	}
}