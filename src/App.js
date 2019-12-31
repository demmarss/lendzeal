import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Home from '../src/Components/Home'
import SideDrawer from '../src/Components/Partials/sideDrawer'
import Agreement from '../src/Components/Agreement'
import Deferment from '../src/Components/Deferment'
import Transaction from '../src/Components/Transaction'
import Contacts from '../src/Components/Contacts'
import Settings from '../src/Components/Settings'
import SignUp from '../src/Components/User/signUp'
import LogIn from '../src/Components/User/logIn'


function App() {

    const classes = useStyles();

    return (
<Router>
        <div className={classes.root}>
            <SideDrawer/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>

                <div>
            <Switch>
              <Route exact  path="/" component={Home} />
              <Route exact  path="/agreement" component={Agreement} />
              <Route exact  path="/transaction" component={Transaction} />
              <Route exact  path="/deferment" component={Deferment} />
              <Route exact  path="/settings" component={Settings} />
              <Route exact  path="/contacts" component={Contacts} />
              <Route exact  path="/login" component={LogIn} />
              <Route exact  path="/sigup" component={SignUp} />

              </Switch>
          </div>
            </main>
        </div>
        </Router>
    );
}

export default App;

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));
