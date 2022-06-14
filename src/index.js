import {createStore} from 'redux';

const $add = document.getElementById('add');
const $minus = document.getElementById('minus');
const $counter = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';

const countReducer = (count = 0, action) => {
  if (action.type === ADD) {
    return count + 1;
  }

  if (action.type === MINUS) {
    return count - 1;
  }

  return count;
};

const countStore = createStore(countReducer);

const handleChange = () => {
  $counter.textContent = countStore.getState();
};

const handleAdd = () => countStore.dispatch({type: ADD});

const handleMinus = () => countStore.dispatch({type: MINUS});

countStore.subscribe(handleChange);
$add.addEventListener('click', handleAdd);
$minus.addEventListener('click', handleMinus);
