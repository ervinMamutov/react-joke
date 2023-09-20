import './Loader.css';
import PropTypes from 'prop-types';

const Loader = () => {
  return (
    <div className="typewriter">
      <div className="slide">
        <i></i>
      </div>
      <div className="paper"></div>
      <div className="keyboard"></div>
    </div>
  );
};

Loader.propTypes = {};

export default Loader;
