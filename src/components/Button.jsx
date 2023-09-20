import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ nextJokeHandler }) => {
  return (
    <div className="btn-container">
      <button className="btn-next" onClick={nextJokeHandler}>
        Find Joke
      </button>
    </div>
  );
};

Button.propTypes = {
  nextJokeHandler: PropTypes.func.isRequired,
};

export default Button;
