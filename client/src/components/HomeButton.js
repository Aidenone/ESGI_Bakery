import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      
      <Button variant="contained" component={Link} to="/security/login"  className={classes.button}>
        Login
      </Button>

      { localStorage.tokenJWT && <React.Fragment>
      <Button variant="contained" component={Link} to="/bakery"  className={classes.button}>
        Bakery List
      </Button>

      <Button variant="contained" component={Link} to="/security/deconnexion"  className={classes.button}>
        Deconnexion
      </Button>
      </React.Fragment>}
      {
      !localStorage.tokenJWT && "not connected"
      } 
      
      

      
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);