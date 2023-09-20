import './Screen.css';
import PropTypes from 'prop-types';

const Screen = ({ jokeData }) => {
  let isTwoPart = '';

  if (jokeData.type === 'twopart') {
    isTwoPart = true;
  }

  return (
    <div className="screen-container">
      <div className="joke-container">
        <div className="joke-text">
          {isTwoPart ? (
            <div className="text-twopart">
              <p className="setup">{jokeData.setup}</p>
              <p className="delivery">{jokeData.delivery}</p>
            </div>
          ) : (
            <div className="text-single">
              <p>{jokeData.joke}</p>
            </div>
          )}
        </div>
      </div>
      <div className="indicator">
        {jokeData.flags &&
          Object.entries(jokeData.flags).map(([key, item]) => (
            <button className={item ? 'red' : 'green'} key={key}>
              {key}
            </button>
          ))}
      </div>
    </div>
  );
};

Screen.propTypes = {
  jokeData: PropTypes.shape({
    category: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['single', 'twopart']).isRequired,
    setup: PropTypes.string,
    delivery: PropTypes.string,
    joke: PropTypes.string,
    flags: PropTypes.object.isRequired,
    safe: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    lang: PropTypes.string.isRequired,
  }),
};

export default Screen;
