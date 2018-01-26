import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import sizeMe from 'react-sizeme';
import PropTypes from 'prop-types';

import Color from '../util/colors';

const style = {
  base: {
    backgroundColor: Color.components,
    opacity: 0.8,
  },
};

class GridContainer extends React.Component {
  drawLayouts = () => {
    return this.props.layoutItems.map((item, index) => {
      const { x, y, w, h, i, type, schema, isResizable, isDraggable } = item;
      const minW = 2;
      const maxW = 60;
      return (
        <div style={style.base} key={i} data-grid={{ i, x, y, w, h, minW, maxW, isResizable, isDraggable }}>
          <h1>{type}</h1>
          <p>Position: {`${x}, ${y}`}</p>
          <p>Dimmensions: {`${w} x ${h}`}</p>
          <code>{JSON.stringify(schema, null, 2)}</code>
        </div>
      );
    });
  }

  render() {
    console.log('this.props.layoutItems', this.props.layoutItems);
    const layout = [
      {
        i: 'a',
        x: 0,
        y: 0,
        w: 1,
        h: 2,
      },
    ];

    return (
      <ReactGridLayout
        layout={layout}
        cols={60}
        onLayoutChange={this.props.updateItems}
        width={this.props.size.width}
        verticalCompact={true}
        horizontalCompact={true}
        compactType={'horizontal'}
      >
        {this.drawLayouts()}
      </ReactGridLayout>
    );
  }
}

GridContainer.propTypes = {
  updateItems: PropTypes.func.isRequired,
  layoutItems: PropTypes.arrayOf(PropTypes.shape({
    w: PropTypes.number,
    h: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    description: PropTypes.string,
    /* Unique to each and every grid square */
    i: PropTypes.string,
    /* The component that should render inside the grid square */
    componentIdentifier: PropTypes.string,
  })).isRequired,
  size: PropTypes.shape({
    width: PropTypes.number,
  }).isRequired,
};

export default sizeMe({ monitorWidth: true })(GridContainer);
