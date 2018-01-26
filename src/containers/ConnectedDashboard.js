import { connect } from 'react-redux'
import { updateLayout } from '../actions'
import Dashboard from './Dashboard'

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    updateLayoutItems: itemsToUpdate => {
      dispatch(updateLayout(itemsToUpdate))
    }
  }
}

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default ConnectedDashboard
