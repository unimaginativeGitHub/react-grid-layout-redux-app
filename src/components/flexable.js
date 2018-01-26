import React from 'react';
import PropTypes from 'prop-types';
import windowSize from 'react-window-size';

const Flexable = props => (
  <div style={{
    display: 'flex',
    width: props.windowWidth,
    height: props.windowHeight,
  }}
  >
    {props.children}
  </div>
);
Flexable.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  windowHeight: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default windowSize(Flexable);
