import { ADD_TODO, EDIT_TODO, DELETE_TODO, GET_TODO } from "./actionTypes";


export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    content
  }
});

export const editTodo = id => ({
  type: EDIT_TODO,
  payload: { id }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});

export const getTodo = () => dispatch => {
  fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
  .then(res => res.json())
  .then(data => dispatch({type : GET_TODO, payload : data}))
}