import PropTypes from 'prop-types';

const One = (props) => {
  return (
    <h1>
      {props.text || 'One'}
    </h1>
  )
}

One.propTypes = {
  text: PropTypes.string,
};

export default One;
