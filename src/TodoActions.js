import { TODO_ADD, TODO_REMOVE, TODO_EDIT, DEL_CIRCLE, SHOW_POPUP_EDIT, SHOW_POPUP_ADD, GET_TASK } from "./types";

export const addTodo = data => ({
	type: TODO_ADD,
	payload: data
})

export const removeTodo = (id) => ({
	type: TODO_REMOVE,
	payload: id
})

export const editTodo = (data) => ({
	type: TODO_EDIT,
	payload: data
})

export const setDelCircle = () => ({
	type: DEL_CIRCLE
})

export const showPopupEdit = (id) => ({
	type: SHOW_POPUP_EDIT,
	payload: id
})

export const showPopupAdd = () => ({
	type: SHOW_POPUP_ADD
})

export const getTask = () => ({
	type: GET_TASK
})