import { Button } from 'react-bootstrap'
import React from 'react'

class AddLayoutItem extends React.Component {
  render() {
    const { type, addLayoutItem } = this.props;
    return (
      <div style={{margin: '50px'}}>
        <form
          onSubmit={e => {
            e.preventDefault()
            addLayoutItem(type)
          }}
        >
          <Button type="submit">
            Add {type} Component
          </Button>
        </form>
      </div>
    )
  }
}

export default AddLayoutItem
