import {createStore} from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const STORAGE_KEY = 'TODOS';

export const action = {
  addTodo: (text) => ({
    type: ADD,
    text,
  }),
  deleteTodo: (id) => ({type: DELETE, id}),
};

const initialState = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [{text: action.text, id: Date.now()}, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const updateStorage = () => {
  const todos = store.getState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

store.subscribe(updateStorage);

export default store;
