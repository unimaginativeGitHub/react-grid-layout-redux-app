import React from 'react';
import PropTypes from 'prop-types';

import Colors from '../util/colors';
import ConnectedAddLayoutItem from '../containers/ConnectedAddLayoutItem';

const style = {
  header: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.paletteHead
  },
  palette: {
    flex: 0.9,
    backgroundColor: Colors.paletteBar
  },
};

const Palette = props => (
  <div style={{
    flex: props.flex,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.secondary,
    boxShadow: '0 0 10px #000000',
  }}
  >
    <div style={style.header}>
      <h1 style={{ textAlign: 'center' }}>Palette</h1>
    </div>
    <div style={style.palette}>
      <ConnectedAddLayoutItem type='freeText'/>
      <ConnectedAddLayoutItem type='signature'/>
      <ConnectedAddLayoutItem type='lockBox'/>
    </div>
  </div>
);

Palette.defaultProps = {
  flex: 1,
};

Palette.propTypes = {
  flex: PropTypes.number,
};

export default Palette;
