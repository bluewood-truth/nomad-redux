import {createStore} from 'redux';

const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const actions = {
  addTodo: (text) => ({type: ADD_TODO, text}),
  deleteTodo: (id) => ({type: DELETE_TODO, id}),
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{text: action.text, id: Date.now()}, ...state];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const handleAddTodo = (text) => store.dispatch(actions.addTodo(text));

const handleDeleteTodo = (e) =>
  store.dispatch(actions.deleteTodo(parseInt(e.target.parentNode.id)));

const handleSubmit = (e) => {
  e.preventDefault();
  const todo = $input.value;
  $input.value = '';
  handleAddTodo(todo);
};

const paintTodos = () => {
  $ul.innerHTML = '';
  const todos = store.getState();
  todos.forEach((todo) => {
    const $li = document.createElement('li');
    const $btn = document.createElement('button');
    $btn.textContent = 'DEL';
    $btn.addEventListener('click', handleDeleteTodo);
    $li.id = todo.id;
    $li.textContent = todo.text;
    $li.append($btn);
    $ul.append($li);
  });
};

store.subscribe(paintTodos);
$form.addEventListener('submit', handleSubmit);
