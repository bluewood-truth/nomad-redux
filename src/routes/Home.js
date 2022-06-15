import {useState} from 'react';
import {connect} from 'react-redux';
import Todo from '../components/Todo';
import {action} from '../store';

const Home = ({todos, addTodo, deleteTodo}) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {todos: state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(action.addTodo(text)),
    deleteTodo: (id) => dispatch(action.deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
