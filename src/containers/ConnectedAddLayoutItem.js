import { connect } from 'react-redux'
import AddLayoutItem from '../components/AddLayoutItem'
import { addLayoutItem } from '../actions'

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    addLayoutItem: itemType => {
      dispatch(addLayoutItem(itemType))
    }
  }
}

const ConnectedAddLayoutItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLayoutItem)

export default ConnectedAddLayoutItem
