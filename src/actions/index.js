export const addLayoutItem = newLayout => {
  return {
    type: 'ADD_LAYOUT',
    newLayoutType: newLayout
  }
}

export const updateLayout = newLayouts => {
  return {
    type: 'UPDATE_LAYOUTS',
    newLayouts: newLayouts
  }
}
