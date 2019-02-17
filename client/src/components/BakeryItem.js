import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';


const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };
  
  function BakeryItem(props) {
    const { classes,bakery } = props;
    return (
                 
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {bakery.name}
            </Typography>
            <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" variant="contained" component={Link} to="/bakery/:id"  color="primary">
            Show
          </Button>
          <Button size="medium" variant="contained" component={Link} to="/bakery"  color="primary">
            Review
          </Button>
         </CardActions>
      </Card>
    );
  }
  
  BakeryItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(BakeryItem);