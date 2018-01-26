const uuidV4 = require('uuid/v4');

const newLayoutOfType = (type, id) => {
  let newComponent = {
    x: 0,
    y: 0,
    w: 15,
    h: 2,
    type: type,
    isResizable: true,
    isDraggable: true,
    i: uuidV4().toUpperCase(),
    schema: {
      type: type,
      col: 15,
      children: []
    }
  };

  switch (type) {
    case 'signature':
      newComponent.isResizable = false;
      newComponent.w = 30;
      break;

    case 'lockBox':
      newComponent.isResizable = false;
      newComponent.isDraggable = false;
      newComponent.h = 4;
      break;

    default:
      break;
  }

  console.log('new component', newComponent);

  return newComponent;
};

const updateEntries = (state, newData) => {
  return state.map((item) => {
    const correspondingNewDataEntry = newData.find((next) => { return next.i === item.i; });
    const newSchema = {
      type: item.type,
      col: correspondingNewDataEntry.w,
      children: []
    };
    return {
      ...item,
      ...correspondingNewDataEntry,
      schema: newSchema
    };
  });
}

const layout = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LAYOUT':
      console.log(' - ADD_LAYOUT - ');
      // TODO - Add some smarts here to add new component to the end of the current layout
      return [
        ...state,
        newLayoutOfType(action.newLayoutType)
      ];

    case 'UPDATE_LAYOUTS':
      console.log(' - UPDATE_LAYOUTS - ');
      return updateEntries(state, action.newLayouts);

    default:
      return state
  }
}

export default layout
