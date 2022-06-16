import {
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';

const STORAGE_KEY = 'TODOS';

const initialState = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

const todos = createSlice({
  name: 'todoReducer',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.unshift({text: action.payload, id: Date.now()});
    },
    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

const store = configureStore({reducer: todos.reducer});

const updateStorage = () => {
  const todos = store.getState();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

store.subscribe(updateStorage);

export const {actions} = todos;

export default store;
