import {useState} from 'react';

const Home = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
};

export default Home;
