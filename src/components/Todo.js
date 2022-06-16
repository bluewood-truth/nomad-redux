import {connect} from 'react-redux';
import {actions} from '../store';

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
      dispatch(actions.deleteTodo(ownProps.id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Todo);
