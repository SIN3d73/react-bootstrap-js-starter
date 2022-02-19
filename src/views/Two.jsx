import PropTypes from 'prop-types';

const Two = (props) => {
  return (
    <h1>
      {props.text || 'Two'}
    </h1>
  )
}

Two.propTypes = {
  text: PropTypes.string,
};

export default Two;
