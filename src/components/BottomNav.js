import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import { NavLink } from 'react-router-dom';
import LanguageIcon from '@material-ui/icons/Language';
import PeopleIcon from '@material-ui/icons/People';
import LocalHospital from '@material-ui/icons/LocalHospital';

const styles = {
  root: {
    width: '100%',
    height: '60px',
    position: 'fixed',
    bottom: 0
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    
    <div>
    <base href="/"/>
    </div>
    
    return (
    
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
          <head>
          <base href="/"/>
          </head>
        <BottomNavigationAction button component={NavLink} to='/CountryStyled' label="Semua Negara" icon={<LanguageIcon />} />
        <BottomNavigationAction button component={NavLink} to='/StyledCovid' label="Covid Tracker" icon={<LocalHospital />} />
        {/* <BottomNavigationAction button component="a" href="Region/asia" label="Asia" icon={<FavoriteIcon />} />
        <BottomNavigationAction button component="a" href="Region/africa" label="Afrika" icon={<PeopleIcon />} />
        <BottomNavigationAction button component="a" href="Region/americas" label="Amerika" icon={<PeopleIcon />} /> */}
        <BottomNavigationAction button component={NavLink} to='/AboutUS' label="About Me" icon={<PeopleIcon />} />
      </BottomNavigation>
      
    );
    
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);