import {connect} from 'react-redux';
import {action} from '../store';

const Todo = ({text, onDeleteClick}) => {
  return (
    <li>
      {text}
      <button onClick={onDeleteClick}>Del</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteClick: () => {
      dispatch(action.deleteTodo(ownProps.id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Todo);
