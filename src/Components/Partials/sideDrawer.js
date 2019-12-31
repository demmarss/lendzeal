import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  }, 
  title: {
    flexGrow: 1,
  },
}));

export default function SideDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      
      <List>
      <Link to="/">
          <ListItem button>
            <ListItemIcon><HomeWorkRoundedIcon /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          </Link>
      </List>
      <Divider />
      <List>
        <Link to='/agreement'>
          <ListItem button>
            <ListItemIcon><AssignmentRoundedIcon /></ListItemIcon>
            <ListItemText>Agreements</ListItemText>
          </ListItem>
          </Link>
      </List>
      <List>
        <Link to='/transaction'>
          <ListItem button>
            <ListItemIcon><ReceiptIcon /></ListItemIcon>
            <ListItemText>Transactions</ListItemText>
          </ListItem>
          </Link>
      </List>
      <List>
        <Link to='/deferment'>
          <ListItem button>
            <ListItemIcon><NextWeekIcon /></ListItemIcon>
            <ListItemText>Deferment</ListItemText>
          </ListItem>
          </Link>
      </List>
      <List>
      <Link to='/contacts'>
          <ListItem button>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText>Contacts</ListItemText>
          </ListItem>
          </Link>
      </List>
      <List>
      <Link to='/settings'>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
          </Link>
      </List>
      <List>
      <Link to='/logIn'>
          <ListItem button>
            <ListItemIcon><LockOpenIcon /></ListItemIcon>
            <ListItemText>Log In </ListItemText>
          </ListItem>
          </Link>
      </List>
      <List>
          <ListItem button>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText>Log Out </ListItemText>
          </ListItem>
          
      </List>
      <List>
      <Link to='/sigUp'>
          <ListItem button>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText>Sign Up</ListItemText>
          </ListItem>
          </Link>
      </List>
    </div>
  );

  return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            LendZeal
          </Typography>

          <Button color="inherit">Login</Button>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      </React.Fragment>

  );
}

SideDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};
