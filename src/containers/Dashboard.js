import React from 'react';
import PropTypes from 'prop-types';
import Color from '../util/colors';
import Grid from '../components/Grid';

class Dashboard extends React.Component {
  render() {
    const style = {
      header: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.dashboardHead,
      },
      dashboard: {
        flex: 0.9,
        backgroundColor: Color.dashboardMain,
      },
    };

    const { flex, layouts, updateLayoutItems } = this.props;

    return (
      <div style={{
        flex: flex,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 0 10px #000000',
      }}
      >
        <div style={style.header}>
          <h1 style={{ textAlign: 'center' }}>Header</h1>
        </div>
        <div style={style.dashboard}>
          <Grid layoutItems={layouts} updateItems={updateLayoutItems}/>
        </div>
      </div>
    );
  }
}

Dashboard.defaultProps = {
  flex: 1
};

Dashboard.propTypes = {
  flex: PropTypes.number,
  layouts: PropTypes.array.isRequired
};

export default Dashboard;
