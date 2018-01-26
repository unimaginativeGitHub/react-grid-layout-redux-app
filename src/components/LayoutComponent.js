import React from 'react'
import PropTypes from 'prop-types'

const LayoutComponent = ({ type, id }) => (
  // get state and figure out what the `next` component should be...
  // switch statement to define defaults / settings for components by type

  const defaultDims = {
    width: 15,
    height: 1
  }

  return {
    x: 0,
    y: 0,
    w: defaultDims.width,
    h: defaultDims.height,
    key: `${type}-${id}`,
    type: type,
    // layouts: [ ... ] // eventually, this might have child layouts
    schemaData: {
      // this would likely be populated by products from the switch statement
    },
  };
)

Todo.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default LayoutComponent
