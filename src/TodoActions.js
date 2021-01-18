import { TODO_ADD, TODO_REMOVE, TODO_EDIT, DEL_CIRCLE, SHOW_POPUP_EDIT } from "./types";

export const addTodo = data => ({
	type: TODO_ADD,
	payload: data
})

export const removeTodo = (id) => ({
	type: TODO_REMOVE,
	payload: id
})

export const editTodo = (id, data) => ({
	type: TODO_EDIT,
	payload: {
		id,
		data
	}
})

export const setDelCircle = () => ({
	type: DEL_CIRCLE
})

export const showPopupEdit = () => ({
	type: SHOW_POPUP_EDIT
})