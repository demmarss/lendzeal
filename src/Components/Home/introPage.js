import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import lendzeallogo from '../../lendzeallogo.jpg'
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 400,
      flexGrow: 1,
      alignItems: 'center',
    },

    img: {
      height: 255,
      maxWidth: 400,
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
  }));

export default function IntroPage() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <img
        className={classes.img}
        src={lendzeallogo}
        alt='LendZeal Background'
      />
<Typography gutterBottom variant="h5" component="h2">
          Welcome
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This app will help you to set up lending process easily. 
          </Typography>
        </div>
  );
}